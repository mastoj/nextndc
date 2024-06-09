import Link from "next/link";
import FadeInComponent from "../../_components/fade-in-component";

type Props = {
  params: {
    orderId: string;
  };
};

const OrderPage = async ({ params: { orderId } }: Props) => {
  return (
    <FadeInComponent>
      <div className="flex flex-col gap-2">
        <div>OrderPage: {orderId}</div>
        <Link href="/demos/layout/orders" className="hover:underline">
          Back
        </Link>
      </div>
    </FadeInComponent>
  );
};

export default OrderPage;
