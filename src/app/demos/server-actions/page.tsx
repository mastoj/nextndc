import { Column, TwoColumns } from "@/app/slides/_components/slide-layouts";
import { getSlidePathFromName } from "@/app/slides/_slides/config";
import Link from "next/link";
import { ClientDemo } from "./_components/client-demo";
import { FormDemo } from "./_components/form-demo";

type Props = {};

const ServerActionsPage = async (props: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <TwoColumns>
        <Column>
          <FormDemo />
        </Column>
        <Column>
          <ClientDemo />
          <Link
            href={getSlidePathFromName("ServerActions")}
            className="self-center"
          >
            Slides
          </Link>
        </Column>
      </TwoColumns>
    </div>
  );
};

export default ServerActionsPage;
