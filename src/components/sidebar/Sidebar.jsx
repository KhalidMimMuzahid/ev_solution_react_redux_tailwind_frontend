import { useGetMenuQuery } from "../../app/services/appApi/appApi";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { data } = useGetMenuQuery();

  const keys = Object?.keys(data?.menu);

  return (
    <div className="w-[250px] bg-[#ffffff] text-[#000] h-full overflow-auto block">
      {/* we are looping over the menu and sub menu items  */}
      {keys?.map((key, index) => (
        <SidebarItem
          key={index}
          items={data?.menu[key]}
          //if this menu has nested submenu; we are passing its name otherwise null
          title={typeof data?.menu[key] == "object" ? key : null}
        />
      ))}
    </div>
  );
};

export default Sidebar;
