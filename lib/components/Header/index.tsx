import Logo from "@/assets/logo.svg";
import Brand from "@/assets/brand.svg";

import { Separator } from "@radix-ui/react-separator";
import { Badge } from "@/ui/badge";
import { type JSX } from "react";
import { GithubDropdownMenu } from "./components/GithubDropdownMenu";

export const Header = ({
  endSlot,
  toolNameSrc,
  ghRepoName = "pvm-debugger",
  keepNameWhenSmall = false,
}: {
  endSlot?: JSX.Element;
  toolNameSrc: string;
  ghRepoName?: string;
  keepNameWhenSmall?: boolean;
}) => {
  return (
    <div className="bg-[#242424] w-full flex flex-row items-center justify-between py-[18px] text-xs overflow-hidden border-b border-b-secondary-foreground dark:border-b-brand">
      <div className="flex items-center gap-5 sm:w-full">
        <a href="/" className="flex items-center pl-4 shrink-0">
          <img src={Logo} alt="FluffyLabs logo" className="h-[40px] max-w-fit" />
          <img src={Brand} alt="FluffyLabs brand" className="max-sm:hidden md:inline ml-4 h-[28px]" />
        </a>
        <Separator className="bg-gray-600 w-[1px] h-[40px] sm:h-[50px] " orientation="vertical" />
        <div
          className={`flex max-sm:flex-col-reverse ${!keepNameWhenSmall ? "max-sm:hidden" : ""} items-end md:items-center h-[50px]`}
        >
          <img src={toolNameSrc} alt="FluffyLabs brand" className="h-[40px]" />
          <div className="shrink sm:ml-1 sm:mb-4">
            <Environment />
          </div>
        </div>
      </div>
      <div className="flex w-full items-center max-sm:ml-2 justify-end">
        {endSlot}
        <GithubDropdownMenu ghRepoName={ghRepoName} />
      </div>
    </div>
  );
};

const Environment = () => {
  const { host } = window.location;
  let env = "PR preview";
  if (host === "pvm.fluffylabs.dev") {
    env = "prod";
  } else if (host === "pvm-debugger.netlify.app") {
    env = "beta";
  }

  env = "beta";

  return (
    <Badge className="px-2 py-[0.5px] sm:py-1 bg-brand text-[10px] max-sm:text-[7px] text-black whitespace-nowrap hover:bg-brand">
      {env}
    </Badge>
  );
};
