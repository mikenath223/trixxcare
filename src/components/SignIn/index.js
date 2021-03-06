import React from 'react';
import Button from 'react-bootstrap-button-loader';
import PropTypes from 'prop-types';
import style from 'style/Auth.module.css';


const SignIn = ({ handleSignInChange, handleSigninSubmit, load }) => (
  <div className={`${style.modal} modal signin-modal `}>
    <span className={`${style.close} close close-sign `}>&times;</span>
    <form className={`${style.form} form signin-form `} onSubmit={handleSigninSubmit}>
      <h1>Sign In</h1>
      <label htmlFor="username" className={style.label}>
        Username
        <input type="text" name="username" onChange={handleSignInChange} required />
      </label>

      <label htmlFor="password" className={style.label}>
        Password
        <input type="password" name="password" onChange={handleSignInChange} required />
      </label>
      <Button loading={load} className={`but ${style.but} ${style.signBut}`}>Sign In</Button>
    </form>
  </div>
);

SignIn.propTypes = {
  handleSignInChange: PropTypes.func.isRequired,
  handleSigninSubmit: PropTypes.func.isRequired,
  load: PropTypes.bool.isRequired,
};

export default SignIn;
