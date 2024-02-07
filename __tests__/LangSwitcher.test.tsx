import React from "react";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../theme/muiTheme";
import LangSwitcher, { LangSwitcherProps } from "../src/LangSwitcher";
import FlagWrapper from "../src/LangSwitcher/FlagFrapper";
import {
  LangSwitcherMenuTestId,
  LangSwitcherBthWithCurrLangTestId,
  LangSwtchingLinkTestIdPrefix,
  LangSwtchingMenuItemTestIdPrefix,
} from "../src/LangSwitcher/LangSwitcher";
import { BrowserRouter, Link } from "react-router-dom";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children} </BrowserRouter>
    </ThemeProvider>
  );
};

const deFlagSrc =
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg";

const langs: LangSwitcherProps<string>["langs"] = [
  {
    icon: <FlagWrapper src={deFlagSrc} alt="de" />,
    to: "/de",
    lang: "de",
    label: "Germany",
  },
  {
    icon: (
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg"
        alt="pl"
      />
    ),
    to: "/pl",
    lang: "pl",
    label: "Polski",
  },
  {
    icon: (
      <FlagWrapper
        src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg"
        alt="en"
      />
    ),
    to: "/en",
    lang: "en",
    label: "English",
  },
];

describe("<LangSwitcher />", () => {
  it("should render correctly and be visible and in the document", () => {
    render(<LangSwitcher activeLang="pl" langs={langs} />, {
      wrapper: ThemeWrapper,
    });

    const langSwitcher = screen.getByTestId(LangSwitcherBthWithCurrLangTestId);

    expect(langSwitcher).toBeInTheDocument();
    expect(langSwitcher).toBeVisible();
  });

  it("should render correct flag according to `activeLang` prop", () => {
    render(<LangSwitcher activeLang="pl" langs={langs} />, {
      wrapper: ThemeWrapper,
    });

    const langSwitcher = screen.getByTestId(LangSwitcherBthWithCurrLangTestId);

    const icon = within(langSwitcher).getByAltText("pl");

    expect(icon).toBeInTheDocument();
    expect(icon).toBeVisible();
  });

  it("should open menu when icon btn was clicked", () => {
    render(<LangSwitcher activeLang="pl" langs={langs} />, {
      wrapper: ThemeWrapper,
    });

    const langSwitcher = screen.getByTestId(LangSwitcherBthWithCurrLangTestId);

    const menuWithIconBtns = screen.getByTestId(LangSwitcherMenuTestId);
    expect(menuWithIconBtns).not.toBeVisible();
    // expect(menuWithIconBtns).not.toBeInTheDocument(); // adding this would fail the test as the menu IS in the document (keepMounted prop in LangSwitcher is used) but it's just not visible to the users until they clicks it

    fireEvent.click(langSwitcher, {});

    expect(menuWithIconBtns).toBeVisible();
  });

  it("should redirect to correct path after language changing btn was clicked", () => {
    const resetUrlBtnId = "reset-url-link";
    render(
      <>
        <LangSwitcher activeLang="pl" langs={langs} />
        <Link to={"/"} data-testid={resetUrlBtnId} />
      </>,
      {
        wrapper: ThemeWrapper,
      }
    );

    const langSwitcher = screen.getByTestId(LangSwitcherBthWithCurrLangTestId);
    fireEvent.click(langSwitcher, {});

    const menuWithIconBtns = screen.getByTestId(LangSwitcherMenuTestId);

    const newLangData = langs.find((item) => item.lang === "en");

    const EnSwitcher = within(menuWithIconBtns).getByTestId(
      LangSwtchingLinkTestIdPrefix + newLangData?.lang
    );

    const { pathname } = window.location;
    expect(pathname).toBe("/");

    fireEvent.click(EnSwitcher, {}); // here you click element which will click Link from react-router so it will change window.location.pathname in in the window.location object to "/en" and later on all tests will have this value

    const { pathname: pathnameAfterClick } = window.location;

    expect(pathnameAfterClick).toBe("/en");
    // - - - - - - - - - - - - - - - - - - - - - - - - - -
    fireEvent.click(screen.getByTestId(resetUrlBtnId)); // this is to reset the pathname to "/"
  });

  it("should close menu with langs after clicking one", () => {
    render(<LangSwitcher activeLang="pl" langs={langs} />, {
      wrapper: ThemeWrapper,
    });

    const langSwitcher = screen.getByTestId(LangSwitcherBthWithCurrLangTestId);

    fireEvent.click(langSwitcher, {});

    const menuWithIconBtns = screen.getByTestId(LangSwitcherMenuTestId);
    expect(menuWithIconBtns).toBeVisible();

    const newLangData = langs.find((item) => item.lang === "en");

    const EnMenuItem = within(menuWithIconBtns).getByTestId(
      LangSwtchingMenuItemTestIdPrefix + newLangData?.lang
    );

    fireEvent.click(EnMenuItem, {}); // clicking the MenuItem element with testId: "LangSwtchingMenuItemTestIdPrefix" won't change the url because what chagnes url is the Link component which has testId "LangSwtchingLinkTestIdPrefix"

    const menuWithIconBtnsAterClick = screen.getByTestId(
      LangSwitcherMenuTestId
    );

    expect(menuWithIconBtnsAterClick).not.toBeVisible();
  });

  it("should render correct flag after redeclaring activeLang", () => {
    render(<LangSwitcher activeLang="pl" langs={langs} />, {
      wrapper: ThemeWrapper,
    });

    const langSwitcher = screen.getByTestId(LangSwitcherBthWithCurrLangTestId);
    fireEvent.click(langSwitcher, {});

    const menuWithIconBtns = screen.getByTestId(LangSwitcherMenuTestId);

    const newLangData = langs.find((item) => item.lang === "de")!;

    const DeSwitcher = within(menuWithIconBtns).getByTestId(
      LangSwtchingLinkTestIdPrefix + newLangData.lang
    );

    fireEvent.click(DeSwitcher, {});

    const img = within(DeSwitcher).getByAltText(newLangData.lang);

    expect(img).toHaveProperty("src", deFlagSrc);
  });
});
