import { Field, Form, Formik } from "formik";
import css from "../ContactForm/ContactForm.module.css";
import { useId } from "react";

export default function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <Field className={css.input} type="text" name="name" />
        Number
        <Field className={css.input} type="text" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
