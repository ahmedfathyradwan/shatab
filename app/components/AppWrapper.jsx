"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const AppWrapper = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/auth");

  return (
    <div className="mainContainer">
      {children}
      {!isAuthPage && (
        <div className="mobNav">
          <Navbar />
        </div>
      )}
    </div>
  );
};

export default AppWrapper;
