import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import LoginSectionSignIn1 from '../components/sign-in/LoginSectionSignIn1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Login() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <LoginSectionSignIn1 />
    </React.Fragment>
  );
}

