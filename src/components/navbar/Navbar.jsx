import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className={`flex w-full items-center h-12 bg-white  border-[1px] border-opacity-[1] border-slate-400`}
    >
      <div className="container ">
        <div className="  mx-4 flex items-center justify-between">
          <div className=" flex gap-2  px-4 ">
            <Link
              to="/"
              className="flex items-center justify-center w-full py-[6px]"
            >
              <img
                src="https://www.epicvirtualsolution.com/images/logo/ico.png"
                alt="logo"
                className="h-10 w-auto"
              />
              <img
                src="https://www.epicvirtualsolution.com/images/logo/logo.png"
                alt="logo"
                className="h-6 hidden sm:block"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-end px-4 ">
            <Link
              to="/cart"
              className="border  rounded-md shadow-md  px-[8px] py-[2px] text-sm sm:text-base  text-dark hover:text-primary flex cursor-pointer  bg-slate-900 text-center  font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              My Cart
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
