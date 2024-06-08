import Link from "next/link";
import { PropsWithChildren } from "react";

const Menu = () => {
  const links = [
    {
      href: "",
      text: "Home",
    },
    {
      href: "orders",
      text: "Orders",
    },
    {
      href: "marketing",
      text: "Marketing",
    },
  ].map((link) => (
    <Link
      href={`/demos/layout/${link.href}`}
      key={link.href}
      className="flex items-center gap-2 hover:underline "
    >
      {link.text}
    </Link>
  ));
  return <div className="flex flex-col gap-2 text-xl">{links}</div>;
};
const DemoLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[400px_auto] h-screen w-screen">
      <div className="border-r h-full shadow-md bg-primary/10 p-8">
        <Menu />
      </div>
      <div>
        <h1 className="text-2xl font-bold w-full p-8">Layout demo</h1>
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default DemoLayout;
