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
  const [field, meta, helpers] = useField<ExtendedFile[] | ExtendedFile | null>(
    name
  );

  const onChange: FileInputProps["onChange"] = (event) => {
    if (!event.target.files) return;

    const filesList = Array.from(event.target.files);

    if (multiple) {
      if (Array.isArray(field.value)) {
        helpers.setValue([
          ...field.value,
          ...filesList.map(
            (file) =>
              ({
                file,
                id: uuidv4(),
              } as ExtendedFile)
          ),
        ]);
      } else {
        helpers.setValue(filesList.map((file) => ({ file, id: uuidv4() })));
      }
    } else {
      helpers.setValue({ file: filesList[0], id: uuidv4() });
    }
  };

  /**
   * This function will be called only when file exists so it's not possible for field.value to be null
   */
  const handleDeleteFile = (fileId: string) => {
    // below check is just to get rid of possibly null warning
    if (!field.value) return;

    if (multiple) {
      const valueAsArray = field.value as ExtendedFile[]; // if `multiple` is true then field.value will always be array here

      helpers.setValue(
        valueAsArray.length > 1
          ? valueAsArray.filter((file) => file.id !== fileId)
          : null
        // above I check if length is greater than 1 and if so, I filter, if not, I set null. Previously I didn't check so if length was 1 then empty array was left and formik could give user different error message ("at least one item is required"). But if I want to set min number of uploaded files I can make it it yup, I don't need to pass empty array here so I added length check
      );
    } else {
      helpers.setValue(null);
    }
  };

  return (
    <InputTypeFile
      name={name}
      value={field.value}
      onDeleteIconClick={handleDeleteFile}
      onChange={onChange}
      error={!!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      multiple={multiple}
      {...rest}
    />
  );
};

export default InputTypeFileFormik;
