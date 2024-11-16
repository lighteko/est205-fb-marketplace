import Category from "../../types/category";

export default function MainCategoryHeader({
  category,
}: {
  category: Category;
}): JSX.Element {
  return <>{category.name}</>;
}
