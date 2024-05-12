"use server";
import { revalidatePath } from "next/cache";
import {
  addItem as _addItem,
  completeItem as _completeItem,
  deleteItem as _deleteItem,
  getItems as _getItems,
} from "./todo-service";
import { Result, TodoItem } from "./types";

export async function addItem(form: FormData): Promise<Result<TodoItem>> {
  const text = form.get("text") as string;
  const result = await _addItem(text);
  revalidatePath("/");
  return result;
}
export async function getItems() {
  return _getItems();
}

export async function completeItem(id: number): Promise<Result<TodoItem>> {
  const result = await _completeItem(id);
  revalidatePath("/");
  return result;
}

export async function deleteItem(id: number): Promise<Result<void>> {
  const result = await _deleteItem(id);
  revalidatePath("/");
  return result;
}
