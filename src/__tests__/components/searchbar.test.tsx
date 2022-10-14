import { fireEvent, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../../components/ui/searchbar";
import "@testing-library/jest-dom";

describe("SearchBar", () => {
  it("should render searchbar", () => {
    const fn = jest.fn();

    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SearchBar onSearch={fn} />
      </MemoryRouter>
    );
    expect(getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("should call onSearch when user types", () => {
    const fn = jest.fn();

    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <SearchBar onSearch={fn} />
      </MemoryRouter>
    );
    const input = getByPlaceholderText("Search...") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test" } });

    expect(fn).toBeCalledTimes(1);
  });
});
