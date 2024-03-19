import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { useGetMenuQuery } from "../../app/services/appApi/appApi";
import Navbar from "../../components/navbar/Navbar";

const Main = () => {
  const { isLoading } = useGetMenuQuery();
  if (isLoading) return <div>Is Loading</div>;
  return (
    <div className="h-[100vh] flex">
      <div className="border-r-[1px]  border-slate-400">
        <Sidebar />
      </div>
      <div className="overflow-auto overflow-y-auto w-full">
        <div className=" p-1 ">
          <Navbar />
        </div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
