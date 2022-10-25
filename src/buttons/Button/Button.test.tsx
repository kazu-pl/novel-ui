import { getByText, render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should be in the document", () => {
    const { container } = render(<Button>click me</Button>);

    const btn = getByText(container, "click me");

    expect(btn).toBeInTheDocument();
  });
});
