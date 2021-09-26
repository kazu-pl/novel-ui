import { Meta } from "@storybook/react/types-6-0";
import * as yup from "yup";
import Button from "../../src/buttons/Button";

import { Formik, Form, FormikHelpers } from "formik";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TextFieldFormik from "../../src/formik/TextFieldFormik";
import MenuItem from "@mui/material/MenuItem";
import AutocompleteAsyncFormik from "../../src/formik/AutocompleteAsyncFormik";
import { Option } from "../../src/inputs/Autocomplete";

import { useState } from "react";

export default {
  title: "Formik/FormikAutocompleteAsync",
} as Meta;

interface FormValues {
  country: string;
  city: string;
}

const validationSchema = yup.object({
  country: yup.string().required("To pole jest obowiązkowe"),
  city: yup.string().required(),
});

interface Country {
  label: string;
  id: string;
}

const countries: Country[] = [
  {
    id: "pl",
    label: "Poland",
  },
  {
    id: "en",
    label: "England",
  },
  {
    id: "de",
    label: "Germany",
  },
];

const initialValues: FormValues = {
  country: "",
  city: "",
};

interface City extends Option {
  country: "pl" | "en" | "de";
}

const AllCities: City[] = [
  {
    country: "pl",
    id: "ww",
    label: "Warszawa",
  },
  {
    country: "pl",
    id: "wwa",
    label: "Warszawskie wzgórze",
  },
  {
    country: "pl",
    id: "wc",
    label: "Wrocławek",
  },
  {
    country: "pl",
    id: "wr",
    label: "Wrocław",
  },
  {
    country: "pl",
    id: "kr",
    label: "Kraków",
  },
  {
    country: "pl",
    id: "krp",
    label: "Krakowskie przedmieście",
  },
  {
    country: "de",
    id: "br",
    label: "Berlin",
  },
  {
    country: "de",
    id: "cl",
    label: "Colony",
  },
  {
    country: "de",
    id: "hb",
    label: "Hamburg",
  },
  {
    country: "en",
    id: "ld",
    label: "Londyn",
  },
  {
    country: "en",
    id: "gl",
    label: "Glasgow",
  },
  {
    country: "en",
    id: "bi",
    label: "Birmingham",
  },
];

export const AutocompleteAsyncWithFormik = () => {
  const handleAsyncSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    setTimeout(() => {
      actions.setSubmitting(false);
      alert(JSON.stringify(values, null, 2));
    }, 2000);
  };

  const [cities, setCities] = useState<City[]>([]);

  const fetchCity = async (country: string, query: string) => {
    const data = await new Promise<City[]>((resolve, reject) => {
      const citiesOfSelectedCountry = AllCities.filter(
        (item) => item.country === country
      );

      const filteredItems = citiesOfSelectedCountry.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );

      setTimeout(() => {
        resolve(filteredItems);
      }, 2000);
    });

    return data;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAsyncSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, values }) => (
        <Form>
          <Box maxWidth="800px">
            <Box boxShadow={2} p={2}>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Box>

            <Box pt={4} pb={1}>
              <Typography variant="button">select your country:</Typography>
            </Box>

            <TextFieldFormik select name="country" label="Country" fullWidth>
              {countries.map((item) => (
                <MenuItem value={item.id} key={item.id}>
                  {item.label}
                </MenuItem>
              ))}
            </TextFieldFormik>

            <Box pt={4} pb={4}>
              <Typography variant="button">select city:</Typography>
            </Box>

            <AutocompleteAsyncFormik
              inputLabel="City"
              name="city"
              options={cities}
              setOptionsOnInputChange={setCities}
              fetchOptionsOnInputChange={(query) =>
                fetchCity(values.country, query)
              }
            />

            <Box p={2} display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                type="submit"
                isLoading={isSubmitting}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
