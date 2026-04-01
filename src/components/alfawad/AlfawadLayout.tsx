import { ReactNode } from "react";
import AlfawadHeader from "./AlfawadHeader";
import AlfawadFooter from "./AlfawadFooter";

interface AlfawadLayoutProps {
  children: ReactNode;
}

const AlfawadLayout = ({ children }: AlfawadLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
      <AlfawadHeader />
      <main className="flex-1 w-full mx-auto shadow-2xl bg-white min-h-[50vh]">
        {children}
      </main>
      <AlfawadFooter />
    </div>
  );
};

export default AlfawadLayout;
