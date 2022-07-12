import React from 'react';

import {Formik, Form, Field, ErrorMessage, FormikHandlers} from 'formik';
import FormSchema from '../schema/FormSchema';

import "./CustomForm.css";

interface IFormikValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};
const CustomForm = () => {
  const handleFormikSubmit = (values:IFormikValues) => {
    console.log(values);
  };
  return (
    <div className='form-wrapper'>
      <Formik 
      onSubmit={handleFormikSubmit} 
      initialValues={initialValues} 
      validationSchema={FormSchema}
      >
      
      {({errors, touched}) => (
        <Form >
        <h2>Fale Conosco</h2>
        <div className='form-col'>
          <label htmlFor="">Digite seu nome</label>
          <Field id="name" name="name" className={errors.name && touched.name && "invalid"}/>
          <ErrorMessage component="span" name='name' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Digite seu email</label>
          <Field id="email" name="email" className={errors.email && touched.email && "invalid"}/>
          <ErrorMessage component="span" name='email' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Digite o Assunto</label>
          <Field id="subject" name="subject" className={errors.subject && touched.subject && "invalid"}/>
          <ErrorMessage component="span" name='subject' className='form-invalid-feedback'/>
        </div>
        <div className='form-col'>
          <label htmlFor="">Digite sua menssagem</label>
          <Field as="textarea" id="message" name="message" className={errors.message && touched.message && "invalid"}/>
          <ErrorMessage component="span" name='message' className='form-invalid-feedback'/>
        </div>
        <button type='submit'>Enviar</button>
      </Form>
      )}  
    </Formik>
    </div>
  );
};

export {CustomForm};