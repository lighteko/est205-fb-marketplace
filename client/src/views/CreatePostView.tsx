import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  MutableRefObject,
} from "react";
import "./CreatePostView.css";
import PhotoSelector from "../components/designbox/PhotoSelector";
import Text from "../components/common/Text";
import Input from "../components/common/Input";
import { InputType } from "../constants/enums";
import useInput from "../hooks/useInput";
import Dropdown from "../components/common/Dropdown";
import useDropdown from "../hooks/useDropdown";
import { Option } from "../types/option";
import Category from "../types/category";
import CategoryService from "../services/category.service";
import Post from "../types/post";
import AuthService from "../services/auth.service";
import User from "../types/user";
import PostService from "../services/post.service";
import { useNavigate } from "react-router-dom";
import { UsePhotoSelector, usePhotoSelctor } from "../hooks/usePhotoSelctor";

export default function CreatePostView(): JSX.Element {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [title, onChangeTitle] = useInput("");
  const [description, onChangeDescription] = useInput("");
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [price, onChangePrice] = useInput("");
  const [selectedCategory, setCategory] = useDropdown({
    optionID: 0,
    optionValue: "Select Category",
    optionContent: "Select Category",
  }) as [Option, (option: Option) => void];
  const [location, setLocation] = useState("");
  const categories = useRef<Category[]>([]);
  const user = useRef<User | null>(null);
  const [photos, handlePhotos]: UsePhotoSelector = usePhotoSelctor();
  useEffect(() => {
    const fetch = async () => {
      categories.current = await CategoryService.getCategories();
      user.current = await AuthService.getCurrentUser();
      setLoading(false);
    };
    setLoading(true);
    fetch();
  }, []);

  const submit = async () => {
    const categoryID = selectedCategory.optionID;
    const product: Partial<Post> = {
      user: user.current?._id,
      title,
      description,
      price: parseFloat(price),
      category: categoryID,
      location,
      isNegotiable,
    };
    await PostService.createPost(product);
    navigate("/posts");
  };

  return (
    <>
      <header>
        <Text content="Post New Item" fontSize={1.5} fontWeight="bold" />
        <PhotoSelector selectedPhotos={photos} maxCount={10} handler={handlePhotos}/>
      </header>
      <section id="title-section">
        <label className="label">Title</label>
        <Input
          type={InputType.INPUT}
          placeholder="Title"
          onChange={(e) => onChangeTitle(e)}
          value={title}
          name="title"
        />
      </section>
      <section id="category-section">
        <label className="label">Category</label>
        <Dropdown
          title="Catagories"
          options={[
            ...categories.current.map((category) => {
              return {
                optionID: category._id,
                optionValue: category._id,
                optionContent: category.name,
              } as Option;
            }),
          ]}
          value={selectedCategory}
          onSelect={setCategory}
        />
      </section>
      <section id="description-section">
        <label className="label">Product Description</label>
        <Input
          type={InputType.TEXTAREA}
          placeholder="Enter product description"
          onChange={onChangeDescription}
          value={description}
          name="description"
        />
      </section>
      <section id="price-section">
        <label className="label">Sell Method</label>
        <div className="sell-method-buttons">
          <button className="sell-method-button selected">To Sell</button>
          <button className="sell-method-button">Give Away</button>
        </div>
        <label className="label">Price</label>
        <Input
          type={InputType.INPUT}
          placeholder="$ Price"
          onChange={(e) => onChangePrice(e)}
          value={price}
          name="price"
        />
      </section>
      <div className="option">
        <input
          type="checkbox"
          id="open-offers"
          onChange={(e) => {
            setIsNegotiable(e.target.checked);
          }}
        />
        <label htmlFor="open-offers">Open to Price Offers</label>
      </div>
      <label className="label">Direct Location Range</label>
      <button className="add-location" onClick={() => setLocation("New York")}>
        + Add Location
      </button>
      <button className="post-product" onClick={() => submit()}>
        Post Product
      </button>
    </>
  );
}
