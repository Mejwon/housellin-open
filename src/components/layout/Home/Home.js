import React, { Fragment } from 'react';
import Offer from './Offer/Offer';
import GetOffer from './GetOffer/GetOffer';
import Benefits from './Benefits/Benefits';
import HowItWorks from './HowItWorks/HowItWorks';
import Advantages from './Advantages/Advantages';
import ClearCosts from './ClearCosts/ClearCosts';
import Newsletter from './Newsletter/Newsletter';
import Faq from './FAQ/Faq';

const Home = () => {
  return (
    <Fragment>
      <GetOffer />
      <Offer />
      <div className='container hiw'>
        <Benefits />
        <HowItWorks />
      </div>
      <Advantages />
      <ClearCosts />
      <Newsletter />
      <Faq />
    </Fragment>
  );
};

export default Home;
