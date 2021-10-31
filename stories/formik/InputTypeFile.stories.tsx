import { Meta } from "@storybook/react/types-6-0";
import * as yup from "yup";
import { Formik, Form, FormikHelpers } from "formik";
import FileInputFormik, {
  ExtendedFile,
} from "../../src/formik/FileInputFormik";
import Box from "@mui/material/Box";
import Button from "../../src/buttons/Button";
import { useRef } from "react";
import Typography from "@mui/material/Typography";

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
    formData.append("file", fileFromInputRef); // send this to server like this:
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
          </Box>

          <FileInputFormik
            name="file"
            id="contained-button-file"
            accept="images"
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

// -------------------------------------------------------------

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
  const inputFilesRef = useRef<HTMLInputElement | null>(null);

  const handleAsyncMultipleSubmit = (
    values: MultipleFormValues,
    actions: FormikHelpers<MultipleFormValues>
  ) => {
    console.log({ values });

    const filesFromInputRef = Array.from(inputFilesRef.current.files);

    const formData = new FormData();

    filesFromInputRef.forEach((file) => {
      formData.append("files", file);
    });
    // after using forEach, you can send it to server like this:
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
          </Box>

          <FileInputFormik
            name="files"
            id="contained-button-file"
            accept="images"
            inputRef={inputFilesRef}
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
