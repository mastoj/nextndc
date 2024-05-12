"use client";

import { createRef } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { addItem } from "./todo-actions";

type Props = {};

const AddItemForm = (props: Props) => {
  const formRef = createRef<HTMLFormElement>();

  const handleSubmit = async (formData: FormData) => {
    const result = await addItem(formData);
    if (result.success) {
      formRef.current!.reset();
    } else {
      toast.error(result.error);
    }
  };

  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="w-full flex flex-col gap-4 justify-start"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="text">What is on your mind?</Label>
        <Input id="text" name="text" type="text" />
      </div>
      <div className="flex flex-row justify-end">
        <Button variant={"default"} type="submit" className="">
          Add
        </Button>
      </div>
    </form>
  );
};

export default AddItemForm;
