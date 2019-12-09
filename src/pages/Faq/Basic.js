import React from 'react';
import { Formik } from 'formik'
import { Form, Input, SubmitBtn } from 'react-formik-ui';

import GetCashOfferButton from '../../components/GetCashOfferButton'; 

export const Basic = () => (

<Formik
  initialValues={{
    textFieldExample3: ''
  }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>

      <Input
        name='FirstName'
        label='First Name'
        hint='This is a FirstName'
      />
      <Input
        name='LastName'
        label='Last Name'
        hint='This is a LastName'
      />

      <Input
        name='Cell#'
        label='Cell#'
        hint='This is a Cell#'
      />

     <Input
        name='Email'
        label='Email'
        hint='This is a Email'
      />

    <Input  
        name='Street Address'
        label='StreetAddress'
        hint='This is a Street Address'
      />

    <Input  
        name='City'
        label='City'
        hint='This is a City'
      />

    <Input  
        name='State+'
        label='State'
        hint='This is a State'
      />

    <Input  
        name='Zip+'
        label='Zip'
        hint='This is a Zip'
      />

      <GetCashOfferButton />

    </Form>
  )}
/>
); 

export default Basic; 


