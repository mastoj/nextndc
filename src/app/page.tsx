import Link from "next/link";

type Props = {};

const HomePage = (props: Props) => {
  const samples = [
    {
      title: "Todo List",
      description: "A simple todo list showcasing nextjs server actions",
      link: "/todo",
    },
  ];
  return (
    <div className="w-full max-w-lg m-auto py-4">
      <ul className="w-full flex flex-col">
        {samples.map((sample) => (
          <li key={sample.title} className="border-b border-gray-200">
            <Link href={sample.link} className="block p-4 hover:bg-gray-100">
              <h2 className="text-lg font-semibold">{sample.title}</h2>
              <p className="text-gray-600">{sample.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
