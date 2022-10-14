export interface IProduct {
  createdAt: string;
  name: string;
  image: string;
  price: number;
  description: string;
  model: string;
  brand: string;
  id: string;
}

export interface IShoppingCart {
  id: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
}

export interface IFilter {
  brands: string[];
  models: string[];
}

export interface IContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  shoppingCart: IShoppingCart[];
  setShoppingCart: React.Dispatch<React.SetStateAction<IShoppingCart[]>>;
  filters: IFilter;
  setFilters: React.Dispatch<React.SetStateAction<IFilter>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export interface StoreProviderProps {
  children: React.ReactNode;
}
