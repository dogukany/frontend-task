import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ProductItem from "../../components/ui/productslist/ProductItem";
import { Products } from "../../util/constants/testdata";

describe("ProductItem", () => {
  it("should render product item", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductItem product={Products[0]} />
      </MemoryRouter>
    );
    expect(getByText("Roadster")).toBeInTheDocument();
  });
});
