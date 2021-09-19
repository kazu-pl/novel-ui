import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import TextField, { TextfieldProps } from "../src/inputs/TextField";
import { Args } from "../types/storybook";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {},
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextfieldProps> = (args) => <TextField {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  children: "tekst",
} as Args<TextfieldProps>;
