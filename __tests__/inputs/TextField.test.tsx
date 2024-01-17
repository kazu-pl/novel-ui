import React, { ReactNode } from "react";

import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import TextField from "../../src/inputs/TextField";

const wrapperTestId = "wrapperId";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="Wrapper" data-testid={wrapperTestId}>
      {children}
    </div>
  );
};

describe("TextField", () => {
  it("Should render TextField without error", () => {
    render(<TextField />); // by default React Testing Library creates `div` and appends it to the `body` element and this is where `render` renders its content. So the whole html tree is: body>div>render().

    const input = screen.getByRole("textbox");

    // screen.debug();

    expect(input).toBeInTheDocument();
  });

  it("Should render TextField with given placeholder", () => {
    // by default React Testing Library creates `div` and appends it to the `body` element and this is where `render` renders its content. So the whole html tree is: body>div>render(). Smetimes you want to replace the `div` element with something else (for example you want to test `tablebody` which can't be the child of a `div`. In this case, you can use `container` prop as shown below)

    // 1 - create custom element that will be apended directly into `body` element
    const customContainer = document.createElement("section");
    customContainer.classList.add("my-custom-container");

    const placeholerValue = "type something";

    render(<TextField placeholder={placeholerValue} />, {
      container: document.body.appendChild(customContainer), // use this document.body.appendChild() and pass your custom component as the custom container won't be appended to the document.body by default so you have to do it manually like this. more info here: https://testing-library.com/docs/react-testing-library/api#container
    });

    const input = screen.getByRole("textbox");

    // screen.debug();

    expect(input).toHaveAttribute("placeholder", placeholerValue);
  });

  // This test is to check how `wrapper` option works
  it("Should render TextField within Wrapper", () => {
    const {
      container,
      baseElement,
      asFragment,
      debug,
      rerender,
      unmount,
    } = render(<TextField />, {
      wrapper: Wrapper,
    });

    // screen.debug();

    const input = container.querySelector("div.Wrapper"); // if default queries like `getBy...` or `queryBy...` or `findBy..` are no good, you can just use container and its plain html methods like `container.querySelector` or `container.firstChild`

    expect(input).toBeInTheDocument();
  });

  it("should NOT use passed onChange function when user didn't perform any action", () => {
    const onChange = jest.fn();

    render(<TextField onChange={onChange} />);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should call passed onChange function only once after the user made action", () => {
    const onChange = jest.fn();

    render(<TextField onChange={onChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "new value" },
    } as React.ChangeEvent<HTMLInputElement>);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
