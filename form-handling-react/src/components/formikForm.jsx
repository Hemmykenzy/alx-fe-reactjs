import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function FormikForm() {
  const [success, setSuccess] = useState("");

  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Min 6 chars").required("Password is required")
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSuccess("User registered successfully with Formik!");
        resetForm();
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="p-4 border rounded-md w-80 mx-auto mt-6">
      <h2 className="text-xl font-bold mb-3">Register (Formik)</h2>
      {success && <p className="text-green-600">{success}</p>}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-3">
          <Field
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
          />
          <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />

          <Field
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
          />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

          <Field
            type="password"
            name="password"
            placeholder="Password"
            className="border p-2 rounded"
          />
          <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded"
          >
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
