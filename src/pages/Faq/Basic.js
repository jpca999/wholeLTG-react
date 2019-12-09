import React from 'react';

import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';


export const Basic = () => (

<Formik
  initialValues={{
    textFieldExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>

      <Input
        name='textFieldExample3'
        label='Input field label'
        hint='This is a hint'
      />

    </Form>
  )}
/>
); 

export default Basic; 


