import { useContext } from "react";
import { StoreContext } from "../../../stores";
import CardContainer from "./CardContainer";

const SortByCard = () => {
  const { filteredProducts, setFilteredProducts } = useContext(StoreContext);

  const items = [
    { name: "Old to New", value: "old-to-new" },
    { name: "New to Old", value: "new-to-old" },
    { name: "Price: Low to High", value: "price-low-to-high" },
    { name: "Price: High to Low", value: "price-high-to-low" },
  ];

  const handleSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    switch (value) {
      case "old-to-new":
        const oldToNew = [...filteredProducts].sort(
          (a, b) =>
            new Date(a.createdAt).valueOf() - new Date(b.createdAt).valueOf()
        );
        setFilteredProducts(oldToNew);
        break;
      case "new-to-old":
        const newToOld = [...filteredProducts].sort(
          (a, b) =>
            new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf()
        );
        setFilteredProducts(newToOld);
        break;
      case "price-low-to-high":
        const priceLowToHigh = [...filteredProducts].sort(
          (a, b) => a.price - b.price
        );
        setFilteredProducts(priceLowToHigh);
        break;
      case "price-high-to-low":
        const priceHighToLow = [...filteredProducts].sort(
          (a, b) => b.price - a.price
        );
        setFilteredProducts(priceHighToLow);
        break;
      default:
        break;
    }
  };

  return (
    <CardContainer title="Sort By">
      {items.map((item) => {
        return (
          <div className="form-control" key={item.value}>
            <label className="label cursor-pointer">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-primary"
                value={item.value}
                onChange={handleSort}
              />
              <span className=" w-full pl-2">{item.name}</span>
            </label>
          </div>
        );
      })}
    </CardContainer>
  );
};

export default SortByCard;
