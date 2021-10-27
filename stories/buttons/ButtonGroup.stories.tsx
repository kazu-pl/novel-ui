import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button from "../../src/buttons/Button";

import ButtonGroup, { ButtonGroupProps } from "../../src/buttons/ButtonGroup";

export default {
  title: "Buttons/ButtonGroup",
  component: ButtonGroup,
  argTypes: {},
} as Meta;

const Template: Story<ButtonGroupProps> = (args) => <ButtonGroup {...args} />;

export const ContainedBtns = Template.bind({});
ContainedBtns.args = {
  children: (
    <>
      <Button variant="contained" color="primary">
        one
      </Button>
      <Button variant="contained" color="primary">
        two
      </Button>
      <Button variant="contained" color="primary">
        three
      </Button>
    </>
  ),
} as ButtonGroupProps;

export const OutlinedBtns = Template.bind({});
OutlinedBtns.args = {
  variant: "outlined",
  children: (
    <>
      <Button variant="outlined" color="primary">
        one
      </Button>
      <Button variant="outlined" color="primary">
        two
      </Button>
      <Button variant="outlined" color="primary">
        three
      </Button>
    </>
  ),
} as ButtonGroupProps;

export const TextBtns = Template.bind({});
TextBtns.args = {
  variant: "text",
  color: "primary",
  children: (
    <>
      <Button variant="text" color="primary">
        one
      </Button>
      <Button variant="text" color="primary">
        two
      </Button>
      <Button variant="text" color="primary">
        three
      </Button>
    </>
  ),
} as ButtonGroupProps;
