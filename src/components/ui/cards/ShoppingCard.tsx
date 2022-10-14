import { useContext } from "react";
import useCart from "../../../hooks/useCart";
import { StoreContext } from "../../../stores";
import { IShoppingCart } from "../../../util/types";
import CardContainer from "./CardContainer";

const ShoppingCard = () => {
  const { shoppingCart } = useContext(StoreContext);
  const { increment, decrement } = useCart();

  const renderItem = (product: IShoppingCart) => {
    const { id, quantity } = product;

    return (
      <CardContainer>
        <div className="flex flex-row" key={product.id}>
          <div className="flex flex-col w-1/2">
            <p className="text-gray-500 font-medium mb-1">{product.name}</p>
            <p className="text-gray-500 font-medium mb-1">{product.brand}</p>

            <p className="text-blue-600">{product.price}</p>
          </div>
          <div className="flex flex-row w-1/2 justify-end items-center">
            <span
              className="bg-gray-200 p-2 px-3 hover:bg-gray-300 transition cursor-pointer font-bold"
              onClick={() => decrement(id)}
            >
              <p>-</p>
            </span>
            <span className="bg-primary text-white p-3 font-bold">
              <p>{quantity}</p>
            </span>
            <span
              className="bg-gray-200 p-2 px-3 hover:bg-gray-300 transition cursor-pointer font-bold"
              onClick={() => increment(id)}
            >
              <p>+</p>
            </span>
          </div>
        </div>
      </CardContainer>
    );
  };

  return (
    <div className="flex flex-col ">
      {shoppingCart.map((product) => renderItem(product))}
    </div>
  );
};

export default ShoppingCard;
