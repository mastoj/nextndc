import { RscDemoLinks } from "@/components/demo/rsc-demo-links";
import Image from "next/image";
import { Client } from "../_components/client";
import { ServerClient } from "../_components/server-client";
import client from "../_images/client.png";
import page from "../_images/page.png";

type Props = {};

const ServerPage = async (props: Props) => {
  console.log("ServerPage");
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col justify-center items-center">
        <h3>page.tsx</h3>
        <Image src={page} alt="Page code" />
        <h3>client.tsx</h3>
        <Image src={client} alt="Client code" />
        <RscDemoLinks />
      </div>
      <div className="flex flex-col gap-4 p-8 justify-center items-center border border-black bg-emerald-300 text-black rounded-md">
        <h1>Server page</h1>
        <div className="flex flex-row gap-4">
          <ServerClient></ServerClient>
          <Client>
            <ServerClient>
              <ServerClient />
            </ServerClient>
          </Client>
        </div>
      </div>
    </div>
  );
};

export default ServerPage;
