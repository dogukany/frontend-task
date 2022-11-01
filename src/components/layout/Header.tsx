import { useContext, useState } from "react";
import ShoppingCartIcon from "../ui/icons/ShoppingCartIcon";
import UserOutline from "../ui/icons/UserIcon";
import SearchBar from "../ui/searchbar";
import { StoreContext } from "../../stores";
import { Link } from "react-router-dom";
import Drawer from "../ui/drawer/Drawer";
import MenuOutline from "../ui/icons/MenuIcon";
import SortByCard from "../ui/cards/SortByCard";
import FilterByCard from "../ui/cards/FilterByCard";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { setFilteredProducts, products, shoppingCart } =
    useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const onSearch = (value: string) => {
    if (value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredProducts(filtered);
    }
  };

  const getTotalPrice = () => {
    return shoppingCart
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <header className="bg-primary flex flex-row items-center justify-center py-3">
      <span className="text-white text-2xl font-semibold w-1/6 ">
        <Link to={"/"}>
          <p>Store</p>
        </Link>
      </span>
      <div className="w-3/6 ">
        <div className="w-4/6 px-4 hidden lg:block">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
      <div className=" flex flex-row space-x-10  lg:w-1/6 ">
        <div
          className="text-white flex flex-row items-center justify-center cursor-pointer"
          onClick={() => {
            navigate("/cart");
          }}
        >
          <ShoppingCartIcon size={25} />
          <p className="text-sm ">{getTotalPrice()} ₺</p>
        </div>
        <div className="text-white hidden flex-row items-center justify-center cursor-pointer lg:flex">
          <UserOutline size={25} />
          <p> Doğukan Yıldız</p>
        </div>
      </div>
      <button
        className="lg:hidden "
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <MenuOutline size={35} className={"fill-white"} />
      </button>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <SearchBar onSearch={onSearch} />
        <SortByCard />
        <FilterByCard filterType="brand" />
        <FilterByCard filterType="model" />
      </Drawer>
    </header>
  );
};

export default Header;
