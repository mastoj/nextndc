import React from "react";
import AddItemForm from "./add-item-form";
import ItemList from "./item-list";

type Props = {};

const TodoContainer = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <ItemList />
      <AddItemForm />
    </div>
  );
};

export default TodoContainer;
