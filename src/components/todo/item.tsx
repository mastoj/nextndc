"use client";
import { cn } from "@/lib/utils";
import { completeItem, deleteItem } from "./todo-actions";
import { TodoItem } from "./types";

type Props = {
  item: TodoItem;
};

const Item = ({ item }: Props) => {
  return (
    <div
      className={cn(
        "p-2 border rounded cursor-pointer hover:bg-gray-100",
        item.completed && "italic line-through"
      )}
      onClick={() => {
        item.completed ? deleteItem(item.id) : completeItem(item.id);
      }}
    >
      {item.text}
    </div>
  );
};

export default Item;
