import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ArgType } from "../types/storybookArgs";
import FlagWrapper from "../src/LangSwitcher/FlagFrapper";
import LangSwitcher, { LangSwitcherProps } from "../src/LangSwitcher";

type Lang = "pl" | "de" | "en";

export default {
  title: "Other/LangSwitcher",
  component: LangSwitcher,
  argTypes: {
    activeLang: {
      variant: "radio-or-select",
      options: ["pl", "de", "en"],
      control: {
        type: "select",
      },
    },
  } as ArgType<LangSwitcherProps<Lang>>,
} as Meta;

const Template: Story<LangSwitcherProps<Lang>> = (args) => (
  <BrowserRouter>
    <LangSwitcher {...args} />
  </BrowserRouter>
);

export const Basic = Template.bind({});
Basic.args = {
  langs: [
    {
      icon: (
        <FlagWrapper
          src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg"
          alt="de"
        />
      ),
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
  ],
  activeLang: "pl",
} as LangSwitcherProps<Lang>;
