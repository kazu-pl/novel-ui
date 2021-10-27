import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "../../src/buttons/Button";
import { BrowserRouter } from "react-router-dom";
import { ArgType } from "../../types/storybookArgs";

import ColoredIconWrapper from "../../src/ColoredIconWrapper";
import AddIcon from "@mui/icons-material/Add";

// @ts-ignore
import CodeBracketsSVG from "../../stories/introduction/assets/code-brackets.svg";

export default {
  title: "Buttons/Button",
  component: Button,
  argTypes: {} as ArgType<ButtonProps>,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <BrowserRouter>
    <Button {...args} />
  </BrowserRouter>
);

export const Basic = Template.bind({});
Basic.args = {
  children: "click me",
  variant: "contained",
  onClick: () => {},
} as ButtonProps;

const fetchData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 3000);
  });

async function fetchSomeData() {
  try {
    await fetchData();
    // do something
  } catch (err) {
    // do something if error
  }
}

export const onClickPromise = Template.bind({});
onClickPromise.args = {
  children: "do some async work",
  variant: "contained",
  onClickPromise: fetchSomeData,
} as ButtonProps;

export const AsHrefLink = Template.bind({});
AsHrefLink.args = {
  children: "Go Outside website",
  variant: "contained",
  href: "https://www.google.com/",
  target: "_blank",
  rel: "noopener",
} as ButtonProps;

export const AsDownloadBtn = Template.bind({});
AsDownloadBtn.args = {
  children: "Click to download",
  variant: "contained",
  href: CodeBracketsSVG,
  download: true,
} as ButtonProps;

export const AsReactRouterLink = Template.bind({});
AsReactRouterLink.args = {
  children: "Go to account sub-page",
  variant: "contained",
  to: "/account",
} as ButtonProps;

export const WithColoredIcon = Template.bind({});
WithColoredIcon.args = {
  children: "Go to account sub-page",
  startIcon: (
    <ColoredIconWrapper color="white" opacity={0.9}>
      <AddIcon />
    </ColoredIconWrapper>
  ),
  variant: "contained",
} as ButtonProps;
