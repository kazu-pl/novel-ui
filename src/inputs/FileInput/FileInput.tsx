import InputLabel from "@mui/material/InputLabel";
import Button, { ButtonProps } from "../../buttons/Button";
import AddIcon from "@mui/icons-material/Add";
import FormHelperText from "@mui/material/FormHelperText";
import SingleFile, { SingleFileProps, ExtendedFile } from "./SingleFile";

/**
 * @todo
 *
 * I could split FileInputProps into 4 types:
 * FileInputProps rename to FileInputPropsBase and remove `value` and `multiple` from it
 *
 * Then I could create 2nd type FileInputPropsMultiple which could extend FileInputPropsBase and add:
 * ```ts
 * value: ExtendedFile[] | null
 * multiple: true
 * ```
 *
 * Then I could create 3rd type FileInputPropsSingle which could extend FileInputPropsBase and add:
 * ```ts
 * value: ExtendedFile | null
 * multiple: false
 * ```
 *
 * And finally I could create 4th type:
 * type FileInputProps = FileInputPropsBase | FileInputPropsBase
 *
 * It would be more strict but would require always passing `multiple` prop with `false` or `true` as a value
 */
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
  accept?: string;
  /**
   * inputRef prop is used to get files.
   *
   * WARNING: KEEP IN MIND THAT ref KEEPS FILES ONLY FROM LATEST CHANGE EVENT SO IF YOU ADD 1st FILE AND THEN ADD 2nd FILE THEN ref WILL KEEP ONLY 2nd FILE - NOT BOTH!
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
  inputRef?: React.MutableRefObject<HTMLInputElement | null>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteIconClick: (fileId: string) => void;
  /**
   * Used to set preview of image. Preview view/box/window needs to be handled by yourself outside of `FileInput` because different file types needs different preview method.
   *
   * @example
   * Images preview:
   *
   * const MyComponent = () => {
   *  const [url, setUrl] = useState<string | null>(null);
   *
   *  return (
   *    <>
   *      <FileInput
   *      name="images"
   *      id="img_input"
   *      accept="image/*"
   *      multiple
   *      text="select images"
   *      onPreviewFileIconClick={(file)=> {
   *        url && URL.revokeObjectURL(url);
   *        const newUrl = URL.createObjectURL(file.file);
   *        setUrl(newUrl);
   *      }}
   *      />
   *    {url && (
   *      <div>
   *        <img src={url} alt="file preview" />
   *        <button
   *          onClick={()=> {
   *            URL.revokeObjectURL(url); // clears reference to the image in browser memory. WORKS ONLY IN CHROME. More here: https://www.youtube.com/watch?v=18q6-QR_XXY
   *            setUrl(null);
   *          }}>Close Preview</button>
   *      </div>
   *    )}
   *    </>
   *  );
   * }
   *
   * @example
   * PDFs preview:
   * // the same as with images. The only difference is that you render `<embed src={url} />` instead of `<img />`
   */
  onPreviewFileIconClick?: SingleFileProps["onPreviewFileIconClick"];
  value: ExtendedFile | ExtendedFile[] | null;
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
  onPreviewFileIconClick,
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
            file={file}
            onDeleteIconClick={onDeleteIconClick}
            onPreviewFileIconClick={onPreviewFileIconClick}
          />
        ))}

      {!Array.isArray(value) && value && (
        <SingleFile
          file={value}
          onDeleteIconClick={onDeleteIconClick}
          onPreviewFileIconClick={onPreviewFileIconClick}
        />
      )}
    </div>
  );
};

export default FileInput;
