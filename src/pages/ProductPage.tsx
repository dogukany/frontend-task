import RightSideBar from "../components/ui/sidebars/RightSidebar";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../stores";
import Button from "../components/ui/button";
import useCart from "../hooks/useCart";
const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const { products } = useContext(StoreContext);

  const product = products.find((product) => product.id === id);

  if (product) {
    return (
      <Layout>
        <div className="flex flex-row py-4 h-full bg-gray-50 justify-center ">
          <div className=" w-full xl:w-4/6 flex flex-row py-4 bg-gray-50 justify-center h-full mr-4">
            <div className="w-full bg-white shadow h-fit flex flex-col lg:flex-row items-center">
              <div className="w-full xl:w-1/2 h-full flex  ">
                <img
                  alt="product"
                  src={product.image}
                  className="w-full h-full object-cover p-4"
                />
              </div>
              <div className="w-full xl:w-1/2 flex flex-col pt-4 p-4 space-y-4 self-start">
                <p className="text-3xl">{product.name}</p>
                <p className="text-2xl text-primary ">{product.price} ₺</p>
                <Button
                  onClick={() => {
                    addToCart(product);
                  }}
                >
                  Add to Cart
                </Button>
                <p>{product.description}</p>
              </div>
            </div>
          </div>
          <RightSideBar />
        </div>
      </Layout>
    );
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="progress progress-primary w-56" />
    </div>
  );
};

export default ProductPage;
