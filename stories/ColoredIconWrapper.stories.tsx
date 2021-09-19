import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { ArgType } from "../types/storybookArgs";

import ColoredIconWrapper, {
  ColoredIconWrapperProps,
} from "../src/ColoredIconWrapper";

export default {
  title: "Icons/ColoredIconWrapper",
  component: ColoredIconWrapper,
  argTypes: {
    opacity: {
      variant: "number-or-range",
      control: {
        type: "number",
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
  } as ArgType<ColoredIconWrapperProps>,
} as Meta;

const Template: Story<ColoredIconWrapperProps> = (args) => (
  <ColoredIconWrapper {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  children: <AddAPhotoIcon />,
  color: "primary",
} as ColoredIconWrapperProps;
