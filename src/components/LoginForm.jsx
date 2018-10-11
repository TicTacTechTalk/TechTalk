import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'



let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"> Username </label>
        <Field name="username" component="input" type="text"/>
      </div>
      <div>
        <label htmlFor="password"> Password </label>
        <Field name="password" component="input" type="text"/>
      </div>
      <button type="submit"> Login </button>
   </form>
  )
}

LoginForm = reduxForm({
  form: 'contact' // a unique name for this form
})(LoginForm);

export default LoginForm;