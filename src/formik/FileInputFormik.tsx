import InputTypeFile, {
  FileInputProps,
  ExtendedFile,
} from "../inputs/FileInput";
import { useField } from "formik";
import { v4 as uuidv4 } from "uuid";

export type { ExtendedFile };

export interface InputTypeFileFormikProps
  extends Omit<
    FileInputProps,
    "onDeleteIconClick" | "onChange" | "error" | "value"
  > {}

const InputTypeFileFormik = ({
  name,
  multiple,
  helperText,
  ...rest
}: InputTypeFileFormikProps) => {
  const [field, meta, helpers] = useField(name);

  const onChange: FileInputProps["onChange"] = (event) => {
    if (!event.target.files) return;

    const filesList = Array.from(event.target.files);

    multiple
      ? Array.isArray(field.value)
        ? helpers.setValue([
            ...field.value,
            ...filesList.map((file) => ({
              file,
              id: uuidv4(),
            })),
          ])
        : helpers.setValue(filesList.map((file) => ({ file, id: uuidv4() })))
      : helpers.setValue({ file: filesList[0], id: uuidv4() });
  };

  const handleDeleteFile = (fileId: string) => {
    multiple
      ? helpers.setValue(
          field.value.filter((file: ExtendedFile) => file.id !== fileId)
        )
      : helpers.setValue(null);
  };

  return (
    <InputTypeFile
      name={name}
      value={field.value}
      onDeleteIconClick={handleDeleteFile}
      onChange={onChange}
      error={!!meta.error}
      helperText={meta.error || helperText}
      multiple={multiple}
      {...rest}
    />
  );
};

export default InputTypeFileFormik;
