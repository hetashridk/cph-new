import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Services from '../components/Services';
import Clients from '../components/Clients';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <Services />
      <Clients />
    </>
  );
};

export default Home;
