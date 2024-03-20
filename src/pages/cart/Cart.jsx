import { useSelector } from "react-redux";
import EachMobile from "../mobile/eachMobile/EachMobile";
import { Link } from "react-router-dom";

const Cart = () => {
  const myCart = useSelector((state) => state.products.value.myCart);

  return (
    <div>
      <div className="mt-2">
        <h1>Products you added to cart</h1>
      </div>
      <div className="mt-6 flex justify-center items-center">
        {myCart?.length > 0 ? (
          <div>Total Added: {myCart?.length} products </div>
        ) : (
          <div className=" mt-12 flex flex-col gap-4">
            <div>
              <h1>No product you have added to cart.</h1>
            </div>
            <Link
              className="flex cursor-pointer items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              to="/Mobile"
            >
              Click here to add products
            </Link>
          </div>
        )}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(auto-fill, minmax(280px, 1fr))`,
          gap: "20px",
        }}
      >
        {myCart?.map((each, index) => (
          <EachMobile key={index} mobile={each} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
