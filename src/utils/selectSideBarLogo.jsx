import { IoIosHome as Home } from "react-icons/io";
import { TbCategoryFilled as Category } from "react-icons/tb";
import { FaSquarePhone as Contact } from "react-icons/fa6";
import { IoPhonePortrait as Mobile } from "react-icons/io5";
import { BsFillLaptopFill as Laptop } from "react-icons/bs";
import { MdProductionQuantityLimits as Accessories } from "react-icons/md";

// we are returning logo component accordinf to the title name
export const selectLogo = (logoName) => {
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
  }

  return component;
};
