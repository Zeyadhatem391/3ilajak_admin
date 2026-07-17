import { ReactNode } from "react";
import NavBar from "../NavBar";
import SideBar from "../SideBar";

interface Props {
  children: ReactNode;
}

export default function DashbordLayout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        <div className="hidden lg:block">
          <SideBar />
        </div>

        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 lg:p-8 ">
          {children}

          <div className="lg:mb-5 mb-15 "></div>
        </main>
      </div>
    </div>
  );
}
