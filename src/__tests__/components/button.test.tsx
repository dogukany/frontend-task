import { render } from "@testing-library/react";
import Button from "../../components/ui/button/index";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("should render button", () => {
    const { getByText } = render(
      <Button onClick={() => {}}>Buton mesajı</Button>
    );
    expect(getByText("Buton mesajı")).toBeInTheDocument();
  });

  it("should render button with primary style", () => {
    const { getByText } = render(
      <Button onClick={() => {}}>Buton mesajı</Button>
    );
    expect(getByText("Buton mesajı")).toHaveClass("btn-primary");
  });

  it("should call onClick function", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button onClick={onClick}>Buton mesajı</Button>
    );
    getByText("Buton mesajı").click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
