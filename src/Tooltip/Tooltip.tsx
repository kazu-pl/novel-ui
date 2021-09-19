import MuiTooltip, {
  TooltipProps as MuiTooltipProps,
} from "@material-ui/core/Tooltip";

export interface TooltipProps extends MuiTooltipProps {}

const Tooltip = (props: TooltipProps) => {
  return <MuiTooltip {...props} />;
};

export default Tooltip;
