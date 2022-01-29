import { Meta } from "@storybook/react/types-6-0";
import * as yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import FileInputFormik, {
  ExtendedFile,
} from "../../src/formik/FileInputFormik";
import Box from "@mui/material/Box";
import Button from "../../src/buttons/Button";
import { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import FileInput, { FileInputProps } from "../../src/inputs/FileInput";
import { v4 as uuidv4 } from "uuid";

export default {
  title: "Formik/FileInput",
} as Meta;

interface FormValues {
  file: ExtendedFile | null;
}

const validationFileSchema = yup.object({
  file: yup.object().required().nullable(),
});

const initialFileValues: FormValues = {
  file: null,
};

export const SingleFile = () => {
  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleAsyncSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log({ values });

    const fileFromInputRef = inputFileRef.current.files[0];

    const formData = new FormData();
    formData.append("file", fileFromInputRef); // send this to server like below:
    // const response = await axiosSecureInstance.put(
    // `/users/me/avatar`,
    // formData
    // );

    setTimeout(() => {
      actions.setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialFileValues}
      onSubmit={handleAsyncSubmit}
      validationSchema={validationFileSchema}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Box boxShadow={2} p={2} mb={2}>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Box>
          <Box p={2} mb={2}>
            <Typography variant="caption">
              Above, "file" fields are empty but when you submit, you can check
              console to see that they exists
            </Typography>
            <Typography
              variant="caption"
              style={{ display: "block", marginTop: 16 }}
            >
              This example uses ref to input to get files from that ref. Ref
              always keeps files from the latest onChange event (if you upload
              1st img and then 2nd then ref will keep 2nd file - not both) but
              since this example is not multiple it does not matter (Keep in
              mind that when you delete item from list, it won't be deleted from
              input itself - you could still get it via ref).
            </Typography>
          </Box>

          <FileInputFormik
            name="file"
            id="single-file-form-input"
            accept="image/*"
            inputRef={inputFileRef}
            text="select one file"
          />
          <Box
            pt={1}
            alignSelf="flex-end"
            maxWidth="100%"
            width="100%"
            display="flex"
            justifyContent="flex-end"
          >
            <Button variant="contained" type="submit" isLoading={isSubmitting}>
              submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

// ------------------------------------------------------------------------------------
// ---- MULTIPLE FILES BELOW ----------------------------------------------------------
// ------------------------------------------------------------------------------------

interface MultipleFormValues {
  files: ExtendedFile[] | null;
}

const validationMultipleFilesSchema = yup.object({
  files: yup.array().of(yup.object()).min(1).required().nullable(),
});

const initialMultipleFileValues: MultipleFormValues = {
  files: null,
};

export const MultipleFiles = () => {
  const handleAsyncMultipleSubmit = (
    values: MultipleFormValues,
    actions: FormikHelpers<MultipleFormValues>
  ) => {
    console.log({ values });

    const formData = new FormData();

    values.files.forEach((file) => {
      formData.append("files", file.file);
    });
    // after using forEach, you can send it to server like below:
    // const response = await axiosSecureInstance.put(
    // `/users/me/files`,
    // formData
    // );

    setTimeout(() => {
      actions.setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialMultipleFileValues}
      onSubmit={handleAsyncMultipleSubmit}
      validationSchema={validationMultipleFilesSchema}
    >
      {({ isSubmitting, values }) => (
        // add encType="multipart/form-data" to correctly send muliple files
        <Form encType="multipart/form-data">
          <Box boxShadow={2} p={2} mb={2}>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Box>
          <Box p={2} mb={2}>
            <Typography variant="caption">
              Above, "file" fields are empty but when you submit, you can check
              console to see that they exists
            </Typography>

            <Typography
              variant="caption"
              style={{ display: "block", marginTop: 16 }}
            >
              Note that ref to input tag always keeps files from the latest
              onChange event. It means that if you have multiple prop set to
              true and you add 1st file and then add 2nd file then input ref
              will KEEP ONLY THE 2nd FILE, NOT BOTH! That's why it's better to
              put new images from onChange event into formik state / local
              component state and when onSubmit even occurs get those files from
              that state - not file ref. This example does not uses ref at all.
            </Typography>
          </Box>

          <FileInputFormik
            name="files"
            id="multiple-images-form-input"
            multiple
            text="select files"
          />
          <Box
            pt={1}
            alignSelf="flex-end"
            maxWidth="100%"
            width="100%"
            display="flex"
            justifyContent="flex-end"
          >
            <Button variant="contained" type="submit" isLoading={isSubmitting}>
              submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

// ------------------------------------------------------------------------------------
// ---- MULTIPLE IMAGES WITH PREVIEW --------------------------------------------------
// ------------------------------------------------------------------------------------

const multiple = true;

export const MultipleImagesWithPreviw = () => {
  const [files, setFiles] = useState<ExtendedFile[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onChange: FileInputProps["onChange"] = (event) => {
    if (!event.target.files) return;

    const filesList = Array.from(event.target.files);

    if (multiple) {
      if (Array.isArray(files)) {
        setFiles([
          ...files,
          ...filesList.map((file) => ({
            file,
            id: uuidv4(),
          })),
        ]);
      } else {
        setFiles(filesList.map((file) => ({ file, id: uuidv4() })));
      }
    } else {
      setFiles([{ file: filesList[0], id: uuidv4() }]);
    }
  };

  const onDeleteIconClick = (id: string) => {
    previewUrl && URL.revokeObjectURL(previewUrl);
    setFiles((prev) => prev.filter((prevFile) => prevFile.id !== id));
  };

  const onPreviewFileIconClick = (file) => {
    URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(file.file);
    setPreviewUrl(url);
  };

  return (
    <>
      <FileInput
        value={files}
        name="files"
        id="images-input"
        accept="image/*"
        multiple={multiple}
        text="select images"
        onChange={onChange}
        onDeleteIconClick={onDeleteIconClick}
        onPreviewFileIconClick={onPreviewFileIconClick}
      />

      {previewUrl && (
        <div>
          <IconButton
            onClick={() => {
              URL.revokeObjectURL(previewUrl);
              setPreviewUrl(null);
            }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={previewUrl}
            alt="file preview"
            style={{ display: "block" }}
          />
        </div>
      )}
    </>
  );
};

// ------------------------------------------------------------------------------------
// ---- SINGLE PDF FILE WITH PREVIEW --------------------------------------------------
// ------------------------------------------------------------------------------------

export const SinglePDFWithPreviw = () => {
  const [file, setFile] = useState<ExtendedFile[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onChange: FileInputProps["onChange"] = (event) => {
    if (!event.target.files) return;

    const filesList = Array.from(event.target.files);

    setFile([{ file: filesList[0], id: uuidv4() }]);
  };

  const onDeleteIconClick = (id: string) => {
    previewUrl && URL.revokeObjectURL(previewUrl);
    setFile([]);
  };

  const onPreviewFileIconClick = (file) => {
    URL.revokeObjectURL(previewUrl);
    const url = URL.createObjectURL(file.file);
    setPreviewUrl(url);
  };

  return (
    <>
      <FileInput
        value={file}
        name="files"
        id="pdf-file-input"
        accept=".pdf"
        text="select PDF file"
        onChange={onChange}
        onDeleteIconClick={onDeleteIconClick}
        onPreviewFileIconClick={onPreviewFileIconClick}
      />

      {previewUrl && (
        <div style={{ width: "100%", height: "1000px" }}>
          <IconButton
            onClick={() => {
              URL.revokeObjectURL(previewUrl);
              setPreviewUrl(null);
            }}
          >
            <CloseIcon />
          </IconButton>
          <embed src={previewUrl} style={{ width: "100%", height: "100%" }} />
        </div>
      )}
    </>
  );
};
