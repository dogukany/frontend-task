import { getByTestId, render } from "@testing-library/react";
import ProductList from "../../components/ui/productslist/index";
import { Products } from "../../util/constants/testdata";

import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("ProductList", () => {
  it("should render product list", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ProductList items={Products} itemsPerPage={12} />
      </MemoryRouter>
    );
    expect(getByTestId("1")).toBeInTheDocument();
  });

  it("should render pagination", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <ProductList items={Products} itemsPerPage={12} />
      </MemoryRouter>
    );
    expect(getByTestId("pagination")).toBeInTheDocument();
  });

  it("should render pagination with 3 pages", () => {
    const newProducts = Products;

    for (let i = 0; i < 30; i++) {
      const newProduct = {
        ...Products[0],
        id: i.toString(),
      };
      newProducts.push(newProduct);
    }

    const { getByText } = render(
      <MemoryRouter>
        <ProductList items={newProducts} itemsPerPage={12} />
      </MemoryRouter>
    );
    expect(getByText("3")).toBeInTheDocument();
  });
});
