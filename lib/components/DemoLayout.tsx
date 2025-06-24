import { AppsSidebar } from "./AppsSidebar";
import { Header } from "./Header";
import Toolname from "@/assets/tool-name.svg";

export const DemoLayout = () => {
  return (
    <div>
      <Header endSlot={<div className="text-gray-100 mr-2">End slot content</div>} toolNameSrc={Toolname} />
      <div className="flex h-full w-full items-center justify-center">
        <AppsSidebar activeLink="debugger" />
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
};
