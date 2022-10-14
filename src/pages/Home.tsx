import { useContext } from "react";
import ProductsList from "../components/ui/productslist";
import LeftSidebar from "../components/ui/sidebars/LeftSidebar";
import RightSideBar from "../components/ui/sidebars/RightSidebar";
import Layout from "../components/layout";
import { StoreContext } from "../stores";

const App = () => {
  const { filteredProducts } = useContext(StoreContext);

  return (
    <Layout>
      <div className="flex flex-row py-4 h-full justify-center">
        <LeftSidebar />
        <ProductsList items={filteredProducts} itemsPerPage={12} />
        <RightSideBar />
      </div>
    </Layout>
  );
};

export default App;
