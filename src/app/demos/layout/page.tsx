import FadeInComponent from "./_components/fade-in-component";

type Props = {};

const LayoutPage = (props: Props) => {
  return (
    <FadeInComponent>
      <div className="w-full h-full">LayoutPage</div>
    </FadeInComponent>
  );
};

export default LayoutPage;
