import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../index";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="my-1 py-8" />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
