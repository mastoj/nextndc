import Item from "./item";
import { getItems } from "./todo-actions";

type Props = {};

const ItemList = async (props: Props) => {
  const items = await getItems();
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
