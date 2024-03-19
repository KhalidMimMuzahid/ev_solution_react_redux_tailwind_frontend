import { useState } from "react";

const SidebarItem = ({ items, title }) => {
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
          <span>
            <span>icon</span> {title}
          </span>
          <span
            className={
              open
                ? "rotate-180 cursor-pointer transition-all"
                : "cursor-pointer transition-all"
            }
          >
            🔻
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
          <span>
            <span>icon</span> {items}
          </span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
