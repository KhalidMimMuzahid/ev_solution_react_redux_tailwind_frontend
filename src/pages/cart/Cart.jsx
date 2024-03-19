import { useSelector } from "react-redux";
import EachMobile from "../mobile/eachMobile/EachMobile";

const Cart = () => {
  const myCart = useSelector((state) => state.products.value.myCart);

  return (
    <div>
      {myCart?.length > 0 ? (
        <div>Total Added: {myCart?.length} products </div>
      ) : (
        <div>No product you have added to cart</div>
      )}
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
