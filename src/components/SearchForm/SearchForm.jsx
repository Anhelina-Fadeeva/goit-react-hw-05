import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./SearchForm.module.css";
import * as Yup from "yup";

const SearchForm = ({ handleQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    handleQuery(values.query);
    resetForm();
  };

  const validationSchema = Yup.object({
    query: Yup.string()
      .required("This field is required")
      .min(3, "Enter at least 3 characters."),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <Form className={s.form}>
            <Field 
              name="query" 
              type="text" 
              className={s.input} 
              placeholder="Enter your query..." 
            />
            <button type="submit" className={s.btn} disabled={isSubmitting}>
              {isSubmitting ? 'Searching...' : 'Search'}
            </button>
            <ErrorMessage name="query" component="span" className={s.error} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;