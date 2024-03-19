import { useState } from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";
import { IoIosHome as Home } from "react-icons/io";
import { TbCategoryFilled as Category } from "react-icons/tb";
import { FaSquarePhone as Contact } from "react-icons/fa6";
import { IoPhonePortrait as Mobile } from "react-icons/io5";
import { BsFillLaptopFill as Laptop } from "react-icons/bs";
import { MdProductionQuantityLimits as Accessories } from "react-icons/md";
const SidebarItem = ({ items, title }) => {
  const selectLogo = (logoName) => {
    let component;
    switch (logoName) {
      case "Mobile":
        component = <Mobile />;
        break;
      case "Laptop":
        component = <Laptop />;
        break;
      case "home":
        component = <Home />;
        break;
      case "Category":
        component = <Category />;
        break;
      case "contact":
        component = <Contact />;
        break;
      case "Accessories":
        component = <Accessories />;
        break;
      default:
        component = <span></span>;
      // code block
    }

    return component;
  };

  const [open, setOpen] = useState(false);
  // console.log("items", items);
  // console.log("title: ", title);
  let keys;
  if (typeof items == "object") {
    keys = Object?.keys(items);
  }

  if (title) {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center px-2"
        >
          <span className="flex items-center">
            {selectLogo(title)}
            {title}
          </span>
          <span
            className={
              open
                ? "rotate-90 cursor-pointer transition-all"
                : " cursor-pointer transition-all"
            }
          >
            <MdPlayArrow />
          </span>
        </div>
        <div
          className={
            open ? "h-auto overflow-hidden pl-2" : "h-0 overflow-hidden"
          }
        >
          {keys.map((key, index) => (
            <SidebarItem
              key={index}
              items={items[key]}
              title={typeof items[key] == "object" ? key : null}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full hover:bg-[#e3c187cc] hover:text-[#000] px-2 py-2">
        <div className="flex justify-between items-center px-2">
          <Link to={`/${items}`}>
            <span className="flex  items-center">
              {selectLogo(items)} {items}
            </span>
          </Link>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
