/// <reference types="react" />
export declare type Variant = "error" | "info" | "success";
export interface TextfieldProps {
    variant?: Variant;
    children: string;
}
declare const TextField: ({ variant, children }: TextfieldProps) => JSX.Element;
export default TextField;
