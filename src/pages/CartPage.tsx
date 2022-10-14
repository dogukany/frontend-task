import Button from "../components/ui/button";
import ShoppingCard from "../components/ui/cards/ShoppingCard";
import useCart from "../hooks/useCart";
import Layout from "../components/layout";
const CartPage = () => {
  const { getTotalPrice } = useCart();

  return (
    <Layout>
      <div className="flex flex-col items-center space-y-2">
        <div className="w-5/6 lg:w-1/2 mt-2 p-4 bg-white shadow-xl space-y-4">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <ShoppingCard />
          <div className="flex flex-row space-x-2 text-lg justify-end ">
            <p className="text-gray-500 font-medium mb-1">Total Price: </p>
            <p className="text-blue-600">{getTotalPrice()}</p>
          </div>
        </div>
        <div className=" w-1/2">
          <Button onClick={() => {}}>Checkout</Button>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
