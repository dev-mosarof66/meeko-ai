import Navbar from "@/components/landing/navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div onContextMenu={(e) => e.preventDefault()} className="w-full">
      <Navbar />
      <div className="w-full max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
