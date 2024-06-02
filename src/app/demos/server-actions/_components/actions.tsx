"use server";

export const handleFormAction = async (formData: FormData) => {
  const name = formData.get("name");
  console.log("==> Form submitted with name: ", name);
  // Sleep 3 seconds
  if (!name || name === "" || name === "error") {
    return {
      success: false,
      message: "Name cannot be empty or 'error'",
    };
  }
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    success: true,
    message: `Hello, ${name}!`,
  };
};

export const buttonClickAction = async () => {
  console.log("==> Button clicked");
  return "Button clicked!";
};
