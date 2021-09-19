import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "../src/Button";
import { ArgType } from "../types/storybook";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {} as ArgType<ButtonProps>,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  children: "TEST",
  variant: "contained",
} as ButtonProps;
