import { Meta } from "@storybook/react/types-6-0";
import * as yup from "yup";
import TextfieldFormik from "../../src/formik/TextFieldFormik";
import Button from "../../src/buttons/Button";
import CheckboxFormik from "../../src/formik/CheckboxFormik";
import MenuItem from "@mui/material/MenuItem";

import { Formik, Form, FormikHelpers } from "formik";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import RadioFormik from "../../src/formik/RadioFormik";

export default {
  title: "Formik",
} as Meta;

interface FormValues {
  name: string;
  email: string;
  isCodedAgreed: boolean;
  interestedFields: string[];
  gender: string;
  note: string;
  proffession: string;
}

const validationSchema = yup.object({
  name: yup.string().required("To pole jest obowiązkowe"),
  email: yup.string().email().required(),
  isCodedAgreed: yup.boolean().required().oneOf([true]),
  interestedFields: yup.array().of(yup.string()).min(1),
  gender: yup.string().required(),
  note: yup.string(),
  proffession: yup.string().required(),
});

const initialValues: FormValues = {
  name: "",
  email: "",
  isCodedAgreed: false,
  interestedFields: [],
  gender: "",
  note: "",
  proffession: "",
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
          <Box>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Box>

          <Box pt={1} pb={1}>
            <TextfieldFormik
              name="name"
              type="text"
              id="name"
              label="Enter Your Name"
              helperText="Custom helper text"
              fullWidth
            />
          </Box>

          <Box pt={1} pb={1}>
            <TextfieldFormik
              name="email"
              type="text"
              id="email"
              label="Enter Your email"
              fullWidth
            />
          </Box>

          <Box display="flex" flexDirection="column" pt={1} pb={1}>
            <TextfieldFormik
              name="note"
              type="text"
              id="note"
              multiline
              placeholder="I would like to tell you that..."
              rows={4}
              fullWidth
            />
          </Box>

          <Box display="flex" flexDirection="column" pt={1} pb={1}>
            <TextfieldFormik
              name="proffession"
              select
              id="proffession"
              fullWidth
              label="Proffession"
            >
              {["programmer", "designer", "project menager"].map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </TextfieldFormik>
          </Box>

          <Box pt={2} pb={2}>
            <CheckboxFormik
              name="isCodedAgreed"
              label="I agree with whatever you want from me"
              labelPlacement="end"
            />
          </Box>

          <Typography variant="button">
            I'm interested in (select at least 1 item):
          </Typography>
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

          <Box display="flex" flexDirection="column" mt={2}>
            <Typography variant="button">
              My gender is (select one of below):
            </Typography>
            <RadioFormik name="gender" value="male" label="Male" />
            <RadioFormik name="gender" value="female" label="Female" />
            <RadioFormik
              name="gender"
              value="not specified"
              label="I don't want to specify"
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
