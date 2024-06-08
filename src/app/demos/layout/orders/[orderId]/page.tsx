import FadeInComponent from "../../_components/fade-in-component";

type Props = {
  params: {
    orderId: string;
  };
};

const OrderPage = async ({ params: { orderId } }: Props) => {
  return <FadeInComponent>OrderPage: {orderId}</FadeInComponent>;
};

export default OrderPage;
