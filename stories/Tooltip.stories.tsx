import { Meta, Story } from "@storybook/react";

import Tooltip, { TooltipProps } from "../src/Tooltip/Tooltip";
import Button from "../src/Button";
import { Args } from "../types/storybook";

export default {
  component: Tooltip,
  title: "Layout/Tooltip",
} as Meta;

const Template: Story<TooltipProps> = (args) => <Tooltip {...args} />;

export const BasicTooltip = Template.bind({});
BasicTooltip.args = {
  title: "this is tooltiped text",
  children: (
    <Button variant="contained" color="primary">
      HOVER ME
    </Button>
  ),
} as Args<TooltipProps>;
