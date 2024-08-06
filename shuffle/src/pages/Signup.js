import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SignupSectionSignUp1 from '../components/sign-up/SignupSectionSignUp1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Signup() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <SignupSectionSignUp1 />
    </React.Fragment>
  );
}

