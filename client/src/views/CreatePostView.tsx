import React, { useState, useEffect, useRef } from "react";
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
import Loading from "../components/common/Loading";
import RectButton from "../components/common/RectButton";
import { Colors } from "../constants/styles";

export default function CreatePostView(): JSX.Element {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [title, onChangeTitle] = useInput("");
  const [description, onChangeDescription] = useInput("");
  const [isNegotiable, setIsNegotiable] = useState(false);
  const [price, onChangePrice, setPrice] = useInput("");
  const [selectedCategory, setCategory] = useDropdown({
    optionID: 0,
    optionValue: "Select Category",
    optionContent: "Select Category",
  }) as [Option, (option: Option) => void];
  const [location, setLocation] = useState("");
  const categories = useRef<Category[]>([]);
  const user = useRef<User | null>(null);
  const [photos, handlePhotos]: UsePhotoSelector = usePhotoSelctor();
  const [method, setMethod] = useState("");
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
    console.log(photos);
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

  return loading ? (
    <Loading />
  ) : (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1em",
        paddingTop: "2em",
      }}
    >
      <header style={{ width: "100%" }}>
        <Text content="Post New Item" fontSize={1.5} fontWeight="bold" />
        <PhotoSelector
          selectedPhotos={photos}
          maxCount={10}
          handler={handlePhotos}
        />
      </header>
      <section id="title-section" style={{ width: "100%" }}>
        <label className="label">Title</label>
        <Input
          type={InputType.INPUT}
          placeholder="Enter title"
          onChange={(e) => onChangeTitle(e)}
          value={title}
          name="title"
        />
      </section>
      <section id="category-section" style={{ width: "100%" }}>
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
          style={{ width: "10em" }}
        />
      </section>
      <section id="description-section" style={{ width: "100%" }}>
        <label className="label">Product Description</label>
        <Input
          type={InputType.TEXTAREA}
          placeholder="Enter product description"
          onChange={onChangeDescription}
          value={description}
          name="description"
          style={{ width: "calc(100% - 2em)" }}
        />
      </section>
      <section id="price-section" style={{ width: "100%" }}>
        <label className="label">Sell Method</label>
        <div className="sell-method-buttons">
          <RectButton
            text={"To Sell"}
            onClick={() => setMethod("sell")}
            style={{
              width: "15em",
              height: "3em",
              borderRadius: "0.5em",
              backgroundColor:
                method === "sell" ? Colors.primaryColor : Colors.secondaryColor,
              color: method === "sell" ? "white" : "black",
            }}
            size={1}
          />
          <RectButton
            text={"Give Away"}
            onClick={() => {
              setPrice("0");
              setMethod("giveaway");
            }}
            style={{
              width: "15em",
              height: "3em",
              borderRadius: "0.5em",
              backgroundColor:
                method === "giveaway"
                  ? Colors.primaryColor
                  : Colors.secondaryColor,
              color: method === "giveaway" ? "white" : "black",
            }}
            size={1}
          />
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
      <RectButton
        text={"Add Location"}
        onClick={() => setLocation("New York")}
        size={1}
        style={{
          width: "20em",
          height: "3em",
          borderRadius: "0.5em",
          backgroundColor:
            location === "New York"
              ? Colors.primaryColor
              : Colors.secondaryColor,
          color: location === "New York" ? "white" : "black",
        }}
      />
      <RectButton
        text={"Post Item"}
        onClick={() => submit()}
        size={1}
        style={{
          width: "20em",
          height: "3em",
          borderRadius: "0.5em",
        }}
      />
      <RectButton
        text={"Cancel"}
        onClick={() => navigate("/posts")}
        size={1}
        style={{
          marginTop: "2em",
          width: "20em",
          height: "3em",
          borderRadius: "0.5em",
        }}
      />
    </section>
  );
}
