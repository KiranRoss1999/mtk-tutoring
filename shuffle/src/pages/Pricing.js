import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PricingSectionPricing2 from '../components/pricing/PricingSectionPricing2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Pricing() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PricingSectionPricing2 />
    </React.Fragment>
  );
}

