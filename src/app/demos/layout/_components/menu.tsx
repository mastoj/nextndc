import Link from "next/link";

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

export default Menu;
