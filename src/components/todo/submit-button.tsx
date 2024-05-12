"use client";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type Props = {};

const SubmitButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button variant={"default"} type="submit" className="" disabled={pending}>
      Add
    </Button>
  );
};

export default SubmitButton;
