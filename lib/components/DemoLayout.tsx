import { AppsSidebar } from "./AppsSidebar";
import { Header } from "./Header";

export const DemoLayout = () => {
  return (
    <div>
      <Header endSlot={<div className="w-full"></div>} />
      <div className="flex h-full w-full items-center justify-center">
        <AppsSidebar />
        <div className="w-full h-full"></div>
      </div>
    </div>
  );
};
