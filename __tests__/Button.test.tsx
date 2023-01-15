import React from "react";
import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import Button, {
  circularProgressDataTestid,
} from "../src/buttons/Button/Button";
import { BrowserRouter } from "react-router-dom";

describe("Button", () => {
  it("should be in the document", () => {
    render(<Button>click me</Button>);

    const btn = screen.getByText("click me");

    expect(btn).toBeInTheDocument();
  });

  it("should capitalize text", () => {
    render(<Button textTransform="capitalize">text</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toHaveStyle(`text-transform: capitalize`);
  });

  it("should lowercase text", () => {
    render(<Button textTransform="lowercase">text</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toHaveStyle("text-transform: lowercase");
  });

  it("should be disabled when btn is loading so user can't click it again", () => {
    const { container } = render(<Button isLoading>text</Button>);

    const btn = within(container).getByRole("button");

    expect(btn).toBeDisabled();
  });

  it("should NOT be disabled when btn is NOT loading", () => {
    const { container } = render(<Button>text</Button>);

    const btn = within(container).getByRole("button");

    expect(btn).not.toBeDisabled();
  });

  it("should display circular progress when btn is loading", () => {
    const { container } = render(<Button isLoading>text</Button>);

    const circularProgress = within(container).getByTestId(
      circularProgressDataTestid
    );

    expect(circularProgress).toBeInTheDocument();
    expect(circularProgress).toBeVisible();
  });

  it("should NOT display circular progress when btn is NOT loading", () => {
    const { container } = render(<Button>text</Button>);

    const circularProgress = within(container).queryByTestId(
      circularProgressDataTestid
    );

    expect(circularProgress).toBeNull();
  });

  it("should render <a /> tag as button", () => {
    render(<Button component="a">text</Button>);

    const btn = screen.getByRole("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toBeVisible();
  });

  it("should render react-router-dom Link (<a/>) component", () => {
    render(<Button to="/post">text</Button>, {
      wrapper: BrowserRouter,
    });

    const btn = screen.getByRole("link");

    expect(btn).toBeInTheDocument();
    expect(btn).toBeVisible();
  });

  it("should redirect when user clicks btn", () => {
    const newPath = "/post";

    render(<Button to={newPath}>text</Button>, {
      wrapper: BrowserRouter,
    });

    const btn = screen.getByText("text");

    expect(window.location.pathname).toEqual("/");

    fireEvent.click(btn, {});

    expect(window.location.pathname).toEqual(newPath);
  });

  it("should be disabled and showing circular progress when user clicked on btn with async work", () => {
    const makeSomeAsyncWork = async () =>
      new Promise((res, rej) => {
        setTimeout(() => {
          res("");
        }, 1000);
      });

    render(<Button onClickPromise={makeSomeAsyncWork}>text</Button>);

    const btn = screen.getByText("text");

    fireEvent.click(btn, {});

    const circularProgress = screen.queryByTestId(circularProgressDataTestid);

    expect(btn).toBeDisabled();
    expect(circularProgress).toBeInTheDocument();
    expect(circularProgress).toBeVisible();
  });

  it("should NOT be disabled and NOT showing circular progress when user clicked on btn with async work and the work completed", async () => {
    const TIMEOUT_IN_MILISECONDS = 1000;

    const makeSomeAsyncWork = async () =>
      new Promise((res, rej) => {
        setTimeout(() => {
          res("");
        }, TIMEOUT_IN_MILISECONDS);
      });

    render(<Button onClickPromise={makeSomeAsyncWork}>text</Button>);

    const btn = screen.getByText("text");

    fireEvent.click(btn, {});

    const circularProgress = screen.queryByTestId(circularProgressDataTestid);
    expect(circularProgress).toBeInTheDocument();
    expect(circularProgress).toBeVisible();

    await waitFor(
      () => {
        const btnAfterAsync = screen.getByText("text");

        const circularProgressAfterAsync = screen.queryByTestId(
          circularProgressDataTestid
        );

        expect(btnAfterAsync).not.toBeDisabled();
        // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
        expect(circularProgressAfterAsync).toBeNull();
      },
      {
        timeout: TIMEOUT_IN_MILISECONDS + 1,
      }
    );
  });
});
