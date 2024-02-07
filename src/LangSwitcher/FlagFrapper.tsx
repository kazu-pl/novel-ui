import Box from "@mui/material/Box";

export interface FlagWrapperProps {
  src: string;
  alt: string;
  /**
   * Will be used both for width and height property. Takes priority over passed width and height.
   *
   * If size is not provided then with and height will be used. If also width and height were not provided then value 25px will be used for both width and height
   */
  size?: string | number;
  width?: string | number;
  height?: string | number;
}

export const FlagWrapperTestId = "FlagWrapper";

const FlagWrapper = ({ src, alt, width, height, size }: FlagWrapperProps) => {
  return (
    <Box
      width={size || width || 25}
      height={size || height || 25}
      display="flex"
      justifyContent="center"
      alignItems="center"
      data-testid={FlagWrapperTestId}
    >
      <img src={src} alt={alt} width={"100%"} />
    </Box>
  );
};

export default FlagWrapper;
