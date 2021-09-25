import { Meta } from "@storybook/react/types-6-0";
import * as yup from "yup";
import TextfieldFormik from "../../src/formik/TextFieldFormik";
import Button from "../../src/buttons/Button";
import CheckboxFormik from "../../src/formik/CheckboxFormik";

import { Formik, Form, FormikHelpers } from "formik";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default {
  title: "Formik",
} as Meta;

interface FormValues {
  name: string;
  email: string;
  isCodedAgreed: boolean;
  interestedFields: string[];
}

const validationSchema = yup.object({
  name: yup.string().required("To pole jest obowiązkowe"),
  email: yup.string().email().required(),
  isCodedAgreed: yup.boolean().required().oneOf([true]),
  interestedFields: yup.array().of(yup.string()).min(1),
});

const initialValues: FormValues = {
  name: "",
  email: "",
  isCodedAgreed: false,
  interestedFields: [],
};

export const FormikTextField = () => {
  const handleAsyncSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAsyncSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Box p={2}>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Box>

          <Box p={2}>
            <TextfieldFormik
              name="name"
              type="text"
              id="name"
              label="Enter Your Name"
              helperText="Custom helper text"
              fullWidth
            />
          </Box>

          <Box p={2}>
            <TextfieldFormik
              name="email"
              type="text"
              id="email"
              label="Enter Your email"
              fullWidth
            />
          </Box>

          <Box p={2}>
            <CheckboxFormik
              name="isCodedAgreed"
              label="I agree with whatever you want from me"
              labelPlacement="end"
            />
          </Box>

          <Typography>I'm interested in (select at least 1 item): </Typography>
          <Box>
            <CheckboxFormik
              name="interestedFields"
              value="astronomy"
              label="Astronomy"
              labelPlacement="end"
            />
          </Box>
          <Box>
            <CheckboxFormik
              name="interestedFields"
              value="math"
              label="Math"
              labelPlacement="end"
            />
          </Box>
          <Box>
            <CheckboxFormik
              name="interestedFields"
              value="biology"
              label="Biology"
              labelPlacement="end"
            />
          </Box>

          <Box p={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" type="submit" isLoading={isSubmitting}>
              Submit
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
