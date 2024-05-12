import { Result, TodoItem, TodoItems } from "./types";

const items: TodoItems = [
  {
    id: 0,
    text: "Prepare presentation",
    completed: true,
  },
  {
    id: 1,
    text: "Have lunch",
    completed: true,
  },
  {
    id: 3,
    text: "Complete presentation",
    completed: false,
  },
  {
    id: 4,
    text: "Relax",
    completed: false,
  },
];
let nextId = 5;

export const getItems = async () => {
  return items;
};

export const addItem = async (text: string): Promise<Result<TodoItem>> => {
  if (items.map((item) => item.text).includes(text)) {
    return { success: false, error: "Item already exists" };
  }
  const id = nextId;
  nextId++;
  if (text === "") {
    return { success: false, error: "Item cannot be empty" };
  }
  if (id % 3 == 0) {
    // Sleep for 4 seconds
    await new Promise((resolve) => setTimeout(resolve, 4000));
  }
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
