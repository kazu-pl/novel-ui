/// <reference types="react" />
import { FileInputProps, ExtendedFile } from "../inputs/FileInput";
export type { ExtendedFile };
export interface InputTypeFileFormikProps extends Omit<FileInputProps, "onDeleteIconClick" | "onChange" | "error" | "value"> {
}
declare const InputTypeFileFormik: ({ name, multiple, helperText, ...rest }: InputTypeFileFormikProps) => JSX.Element;
export default InputTypeFileFormik;
