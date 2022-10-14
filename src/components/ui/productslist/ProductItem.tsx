import { useContext } from "react";
import { StoreContext } from "../../../stores";
import { IProduct } from "../../../util/types";
import Button from "../button";
import { Link } from "react-router-dom";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { shoppingCart, setShoppingCart } = useContext(StoreContext);

  const AddToCart = (product: IProduct) => {
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

  const { name, price, brand } = product;
  return (
    <div
      className="flex h-fit flex-col p-4 bg-white shadow-sm space-y-3 mb-4 "
      data-testid={product.id}
    >
      <Link to={`product/${product.id}`}>
        <img alt="product" className="w-full h-40" src={product.image} />
      </Link>
      <p className="text-blue-600">{price} ₺ </p>
      <p className="text-black text-md font-bold">{brand}</p>
      <p className="text-gray-500 text-sm">{name}</p>
      <Button
        onClick={() => {
          AddToCart(product);
        }}
      >
        Add to Card
      </Button>
    </div>
  );
};

export default ProductItem;
