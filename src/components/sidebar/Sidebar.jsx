import { useGetMenuQuery } from "../../app/services/appApi/appApi";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { data } = useGetMenuQuery();

  const keys = Object?.keys(data?.menu);

  // console.log({ keys });
  return (
    <div className="w-[250px] bg-[#ffffff] text-[#000] h-full overflow-auto block">
      {keys?.map((key, index) => (
        <SidebarItem
          key={index}
          items={data?.menu[key]}
          title={typeof data?.menu[key] == "object" ? key : null}
        />
      ))}
    </div>
  );
};

export default Sidebar;
