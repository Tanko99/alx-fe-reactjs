import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


   function FormikForm(){
    const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required")
});
return (
   <div>
     <Formik 
     initialValues={{name: "", email: "", password: ""}}
     validationSchema={validationSchema}
     onSubmit={(values, {setSubmitting, resetForm} ) => {
    console.log(values);
    setSubmitting(false);
    resetForm();
  }}>

    {({isSubmitting}) => (
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
   </div>
);

}

export default FormikForm;

 



