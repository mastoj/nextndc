"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { handleFormAction } from "./actions";

type Props = {};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="block" disabled={pending}>
      Submit
    </Button>
  );
};

export const FormDemo = (props: Props) => {
  const [name, setName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    const result = await handleFormAction(formData);
    if (result.success) {
      toast.success(result.message);
      setName("");
    } else {
      toast.error(result.message);
    }
  };
  return (
    <form
      ref={formRef}
      action={handleSubmit}
      className="flex flex-col gap-2 p-4"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          className="max-w-sm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-row">
        <SubmitButton />
      </div>
    </form>
  );
};
