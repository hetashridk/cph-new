import React from 'react';
import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import Clients from '../components/Clients';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <>
      <Hero />
      <HomeAbout />
      <Services />
      <FAQ />
      <Clients />
      <BlogSection />
    </>
  );
};

export default Home;
