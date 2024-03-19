import { useSelector } from "react-redux";

export const useMobileIsAddedToCart = (title) => {
  const myCart = useSelector((state) => state.products.value.myCart);
  const isAlreadyAdded = myCart.some((element) => element.Title === title);

  return isAlreadyAdded;
};
