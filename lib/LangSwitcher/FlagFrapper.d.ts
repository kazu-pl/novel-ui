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
export declare const FlagWrapperTestId = "FlagWrapper";
declare const FlagWrapper: ({ src, alt, width, height, size }: FlagWrapperProps) => JSX.Element;
export default FlagWrapper;
