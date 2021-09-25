import { Meta } from "@storybook/react/types-6-0";
import * as yup from "yup";
import Button from "../../src/buttons/Button";

import { Formik, Form, FormikHelpers } from "formik";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import AutocompleteSyncFormik from "../../src/formik/AutocompleteSyncFormik";

export default {
  title: "FormikAutocompleteSync",
} as Meta;

interface Country {
  id: string;
  label: string;
  code: string;
}

const countries: Country[] = [
  {
    id: "0000-0000-0000-0000",
    label: "Poland",
    code: "pl",
  },
  {
    id: "0000-0000-0000-0001",
    label: "Germany",
    code: "de",
  },
  {
    id: "0000-0000-0000-0002",
    label: "USA",
    code: "usa",
  },
  {
    id: "0000-0000-0000-0003",
    label: "France",
    code: "fr",
  },
  {
    id: "0000-0000-0000-0004",
    label: "Spain",
    code: "es",
  },
  {
    id: "0000-0000-0000-0005",
    label: "Italy",
    code: "it",
  },
  {
    id: "0000-0000-0000-0006",
    label: "greece",
    code: "gr",
  },
  {
    id: "0000-0000-0000-0007",
    label: "turkey",
    code: "tr",
  },
  {
    id: "0000-0000-0000-0008",
    label: "China",
    code: "zh",
  },
];

interface FormValues {
  coutry: string;
}

const validationSchema = yup.object({
  coutry: yup.string().required("To pole jest obowiązkowe"),
});

const initialValues: FormValues = {
  coutry: "",
};

export const AutocompleteSyncWithFormik = () => {
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

          <Box pb={4} pt={4}>
            <Typography variant="button">select your country:</Typography>
          </Box>

          <AutocompleteSyncFormik
            inputLabel="Coutry"
            name="coutry"
            options={countries}
          />

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
