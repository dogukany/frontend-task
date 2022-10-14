import Button from "../button";
import CardContainer from "../cards/CardContainer";
import useCart from "../../../hooks/useCart";
import ShoppingCard from "../cards/ShoppingCard";

const RightSideBar = () => {
  const { getTotalPrice } = useCart();

  return (
    <div className="hidden lg:block 2xl:w-1/6 flex-col space-y-10 h-screen">
      <ShoppingCard />
      <CardContainer>
        <div className="flex flex-row space-x-2 text-lg ">
          <p className="text-gray-500 font-medium mb-1">Total Price: </p>
          <p className="text-blue-600">{getTotalPrice()}</p>
        </div>
        <Button onClick={() => {}}>Checkout</Button>
      </CardContainer>
    </div>
  );
};

export default RightSideBar;
