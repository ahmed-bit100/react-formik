import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

// an alternative way to validate the form fields
const validationSchema = Yup.object({
  name: Yup.string().required('Required field'),
  email: Yup.string().email('Invalid email').required('Required field'),
  phone: Yup.string().required('Required field'),
});

const ExampleForm = () => {
  const formik = useFormik({
    //step 1: declare the intial values of the form fields
    initialValues: {
      // the properties of the initialValues object correspond to the name attributes
      // of each of  the input fields
      name: '',
      email: '',
      phone: '',
    },
    // handling form submission
    // the onSubmit method will recieve the latest values of the form data att all times
    // as its arguments
    onSubmit: (values) => {
      console.log('form data', values);
    },
    // validate: (values) => {
    //   let errors = {};
    //   if (!values.name) {
    //     errors.name = 'this is a required field';
    //   }
    //   if (!values.email) {
    //     errors.email = 'this is a required field';
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    //   ) {
    //     errors.email = 'Invalid email format';
    //   }
    //   if (!values.phone) {
    //     errors.phone = 'this is a required field';
    //   }
    //   return errors;
    // },
    validationSchema,
  });
  //   console.log('form values', formik.values);
  //   console.log('form errors', formik.errors);
  //   console.log('visited fields', formik.touched);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            //step 2 : add an onChange handler and a value attribute
            // using this syntax, formik will automatically track the form fields for you
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} // helper method to track visited fields
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error"> {formik.errors.name} </div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error"> {formik.errors.email} </div>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone && (
            <div className="error"> {formik.errors.phone} </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ExampleForm;
