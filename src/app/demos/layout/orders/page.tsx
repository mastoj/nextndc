import Link from "next/link";
import FadeInComponent from "../_components/fade-in-component";

type Props = {};

const OrdersPage = (props: Props) => {
  const orders = [
    {
      id: 1,
      name: "Order 1",
    },
    {
      id: 2,
      name: "Order 2",
    },
  ];
  return (
    <FadeInComponent>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <Link
              href={`/demos/layout/orders/${order.id}`}
              className="hover:underline text-xl"
            >
              {order.name}
            </Link>
          </li>
        ))}
      </ul>
    </FadeInComponent>
  );
};

export default OrdersPage;
