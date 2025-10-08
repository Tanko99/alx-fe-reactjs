import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function RegistrationForm (){
   const RegistrationFormSchema = Yup.object({
    name: Yup.string().required("username is required"),
    email: Yup.string().email("Invalid email").required("email required"),
    password: Yup.string().required("password required")
});

return (
  <Formik 
  initialValues={{name: "", email: "", password: ""}}
  validationSchema={RegistrationFormSchema}
  onSubmit={(values, {resetForm} ) => {
    console.log(values);
    resetForm();
  }}>

    {() => (
        <Form>
            <div>
                <label>Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="p" />
            </div>
            <div>
                <label>Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="p" />
            </div>
            <div>
                <label>Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="p" />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </Form>
    )}
  </Formik>
);

}

export default RegistrationForm;


