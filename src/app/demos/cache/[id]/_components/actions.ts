"use server";
import { revalidateTag as revalidate } from "next/cache";

export const revalidateTagAction = async (tag: string) => {
  await revalidate(tag);
};
