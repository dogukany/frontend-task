import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { StoreContext } from "./stores";
import {
  IShoppingCart,
  IProduct,
  IFilter,
  StoreProviderProps,
} from "./util/types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

const getInitialShoppingCart = () => {
  const cart = localStorage.getItem("shoppingCart");
  if (cart) {
    return JSON.parse(cart);
  } else {
    return [] as IShoppingCart[];
  }
};

const StoreProvider = ({ children }: StoreProviderProps) => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [shoppingCart, setShoppingCart] = React.useState<IShoppingCart[]>(
    getInitialShoppingCart()
  );
  const [filteredProducts, setFilteredProducts] = React.useState<IProduct[]>(
    []
  );

  const [filters, setFilters] = React.useState<IFilter>({
    brands: [],
    models: [],
  });

  const getData = async () => {
    const response = await fetch(
      "https://5fc9346b2af77700165ae514.mockapi.io/products"
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  useEffect(() => {
    if (filters.brands.length === 0 && filters.models.length === 0) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => {
        if (filters.brands.length === 0) {
          return filters.models.includes(product.model);
        } else if (filters.models.length === 0) {
          return filters.brands.includes(product.brand);
        } else {
          return (
            filters.brands.includes(product.brand) &&
            filters.models.includes(product.model)
          );
        }
      });
      setFilteredProducts(filtered);
    }
  }, [products, filters]);

  return (
    <StoreContext.Provider
      value={{
        products,
        setProducts,
        shoppingCart,
        setShoppingCart,
        filters,
        setFilters,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
