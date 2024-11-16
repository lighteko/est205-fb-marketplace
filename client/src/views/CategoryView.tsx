import { useEffect, useState, useRef } from "react";
import CategoryService from "../services/category.service";
import Category from "../types/category";
import Loading from "../components/common/Loading";
import Header from "../components/wireframe/Header";
import { HeaderType } from "../constants/enums";
import CategoryCard from "../components/card/CategoryCard";

export default function CategoryView(): JSX.Element {
  const categories = useRef<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      categories.current = await CategoryService.getCategories();
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  return (
    <section>
      <Header type={HeaderType.CategoryView} />
      {isLoading ? (
        <Loading />
      ) : (
        <section id="categories">
          {categories.current.map((category) => (
            <CategoryCard key={category._id} categoryId={category._id} />
          ))}
        </section>
      )}
    </section>
  );
}
