import InputLabel from "@mui/material/InputLabel";
import Button, { ButtonProps } from "../../buttons/Button";
import AddIcon from "@mui/icons-material/Add";
import FormHelperText from "@mui/material/FormHelperText";
import SingleFile, { ExtendedFile } from "./SingleFile";

export interface FileInputProps {
  name: string;
  id: string;
  /**
   * @example
   *  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
   * @example
   *  accept=".jpg,.pdf,.doc"
   * @example
   *  accept="audio/*"
   * @example
   *  accept="video/*"
   * @example
   *  accept="image/*"
   *
   * for more, see:
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file}
   *
   */
  accept: string;
  /**
   * inputRef prop is used to get files
   *
   * @example <caption>When `multiple` prop is NOT passed</caption>
   * const fileFromInputRef = inputFileRef.current.files[0];
   *
   * // add single file to formData to send it to server
   * const formData = new FormData();
   *
   * formData.append("file", fileFromInputRef);
   *
   * @example <caption>When `multiple` prop IS passed</caption>
   * const filesFromInputRef = Array.from(inputFilesRef.current.files);
   *
   * const formData = new FormData();
   *
   * // add files to formData to send it to server
   * filesFromInputRef.forEach((file) => {
   *  formData.append("file", file);
   * });
   *
   */
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteIconClick: (fileId: string) => void;
  value: ExtendedFile | ExtendedFile[];
  multiple?: boolean;
  helperText?: string;
  error?: boolean;
  text: string;
  buttonProps?: {
    variant?: ButtonProps["variant"];
    color?: ButtonProps["color"];
    startIcon?: ButtonProps["startIcon"];
    fullWidth?: ButtonProps["fullWidth"];
  };
}

const FileInput = ({
  id,
  inputRef,
  text,
  buttonProps = {
    variant: "contained",
    color: "primary",
    startIcon: <AddIcon />,
  },
  helperText,
  error,
  onDeleteIconClick,
  value,
  ...rest
}: FileInputProps) => {
  return (
    <div>
      <input id={id} type="file" hidden ref={inputRef} {...rest} />
      <InputLabel htmlFor={id}>
        <Button component="span" {...buttonProps}>
          {text}
        </Button>
      </InputLabel>

      {helperText && (
        <FormHelperText
          sx={{
            ...(error && { color: (theme) => theme.palette.error.main }),
          }}
        >
          {helperText}
        </FormHelperText>
      )}

      {Array.isArray(value) &&
        value.map((file) => (
          <SingleFile
            key={file.id}
            onDeleteIconClick={onDeleteIconClick}
            file={file}
          />
        ))}

      {!Array.isArray(value) && value && (
        <SingleFile onDeleteIconClick={onDeleteIconClick} file={value} />
      )}
    </div>
  );
};

export default FileInput;
