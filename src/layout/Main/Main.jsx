import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

const Main = () => {
  return (
    <div className="h-[100vh] flex">
      <Sidebar />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
