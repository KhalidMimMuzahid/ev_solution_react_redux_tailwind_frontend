/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdPlayArrow } from "react-icons/md";
import { selectLogo } from "../../utils/selectSideBarLogo";
const SidebarItem = ({ items, title }) => {
  const [open, setOpen] = useState(false);
  let keys;
  if (typeof items == "object") {
    keys = Object?.keys(items);
  }

  // if title has a value ==>  its has sub menu properties
  if (title) {
    return (
      <div className="w-full hover:bg-[#50505035] hover:text-[#000] px-2 py-2">
        <div
          onClick={() => setOpen(!open)}
          className="flex justify-between items-center px-2 cursor-pointer"
        >
          <span className="flex items-center">
            {selectLogo(title)}
            {title}
          </span>
          <span
            className={open ? "rotate-90  transition-all" : "  transition-all"}
          >
            <MdPlayArrow />
          </span>
        </div>
        <div
          className={
            open ? "h-auto overflow-hidden pl-2" : "h-0 overflow-hidden"
          }
        >
          {/* we are looping over the nested sub menu items calling recursion function*/}
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
    // if title has no value ==>  it will be just a menu name; it has no any nested submenu
    return (
      <div className="w-full hover:bg-[#50505035] hover:text-[#000] px-2 py-2">
        <Link
          to={`/${items}`}
          className="flex justify-between items-center px-2"
        >
          <span className="flex  items-center">
            {selectLogo(items)} {items}
          </span>
        </Link>
      </div>
    );
  }
};

export default SidebarItem;
