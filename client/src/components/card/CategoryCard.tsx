import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../services/category.service";
import Category from "../../types/category";
import Loading from "../common/Loading";
import Text from "../common/Text";

export default function CategoryCard({
  categoryId,
}: {
  categoryId: string;
}): JSX.Element {
  const [loading, setLoading] = useState(true);
  const category = useRef<Category | null>(null);
  useEffect(() => {
    const fetch = async () => {
      category.current = await CategoryService.getCategory(categoryId);
      setLoading(false);
    };
    setLoading(true);
    fetch();
  }, [categoryId]);
  return (
    <Link to={`/posts/category/${categoryId}`}>
      <div
        id={categoryId + "-card"}
        style={{
          margin: "1em",
        }}
      >
        {loading ? (
          <Loading />
        ) : (
          <Text
            content={category.current!.name}
            fontSize={1}
            fontWeight={"600"}
          />
        )}
      </div>
    </Link>
  );
}
