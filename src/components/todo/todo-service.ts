import { Result, TodoItem, TodoItems } from "./types";

let nextId = 0;
const items: TodoItems = [];

export const getItems = async () => {
  return items;
};

export const addItem = async (text: string): Promise<Result<TodoItem>> => {
  if (items.map((item) => item.text).includes(text)) {
    return { success: false, error: "Item already exists" };
  }
  const id = nextId;
  nextId++;
  const newItem = { id, text, completed: false };
  items.push(newItem);
  return { success: true, data: newItem };
};

export const completeItem = async (id: number): Promise<Result<TodoItem>> => {
  const item = items.find((item) => item.id === id);
  if (!item) {
    return { success: false, error: "Item not found" };
  }
  item.completed = true;
  return { success: true, data: item };
};

export const deleteItem = async (id: number): Promise<Result<void>> => {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) {
    return { success: false, error: "Item not found" };
  }
  items.splice(index, 1);
  return { success: true, data: undefined };
};
