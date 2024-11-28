import Category from "../../types/category";
import Text from "../common/Text";

export default function MainCategoryHeader({
  category,
}: {
  category: Category;
}): JSX.Element {
  return (
    <div style={{ paddingLeft: "0.75em", marginTop: "2em" }}>
      <Text content={category.name} fontSize={1.25} fontWeight={"600"} />
    </div>
  );
}
