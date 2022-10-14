import { useContext } from "react";
import { StoreContext } from "../stores";
import { IProduct } from "../util/types";

const useCart = () => {
  const { shoppingCart, setShoppingCart } = useContext(StoreContext);

  const getTotalPrice = () => {
    return shoppingCart
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const addToCart = (product: IProduct) => {
    const { id, name, price, brand } = product;

    const item = {
      id,
      name,
      price,
      brand,
      quantity: 1,
    };
    const isItemInCart = shoppingCart.find((item) => item.id === id);

    setShoppingCart((prev) => {
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, item];
    });
  };

  const increment = (id: string) => {
    setShoppingCart((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const decrement = (id: string) => {
    const quantity = shoppingCart.find((item) => item.id === id)?.quantity;

    if (quantity === 1) {
      setShoppingCart((prev) => {
        return prev.filter((item) => item.id !== id);
      });
    } else {
      setShoppingCart((prev) => {
        return prev.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
      });
    }
  };

  return { addToCart, getTotalPrice, increment, decrement };
};

export default useCart;
