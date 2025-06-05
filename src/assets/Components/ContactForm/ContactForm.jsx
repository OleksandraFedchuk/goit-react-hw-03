import { Field, Form, Formik } from "formik";

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
      <Form>
        <Field type="text" name="name" />
        <Field type="text" name="number" />
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
