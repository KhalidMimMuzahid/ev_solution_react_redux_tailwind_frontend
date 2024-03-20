import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useGetMenuQuery } from "../../app/services/appApi/appApi";
import Navbar from "../../components/navbar/Navbar";

import logo from "../../assets/loader/loader.gif";

const Main = () => {
  const { isLoading } = useGetMenuQuery();

  //before fetching the menu items, we showing the loading component to the user
  if (isLoading) {
    return (
      <div className=" h-[100vh] w-[100vw] flex justify-center items-center bg-black">
        <img src={logo} className="w-[80px]" alt="loading..." />
      </div>
    );
  }
  //after fetching the menu items, are rendering the main app
  return (
    <div className="h-[100vh] flex">
      {/* side bar for menu items */}
      <div className="border-r-[1px]  border-slate-400">
        <Sidebar />
      </div>

      {/* main page / user work space */}
      <div className="overflow-auto overflow-y-auto w-full">
        <div
          className=" shadow-lg "
          style={{ position: "sticky", top: "0px", zIndex: "999" }}
        >
          {/* navbar inside the main / work space */}
          <Navbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
