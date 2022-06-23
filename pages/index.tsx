import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { Header, Slider, Footer, Group, BodyGradient, LineGradient, Accordions } from '@/src/components';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>FrontierX</title>
        <meta name='description' content='Lorem ipsum...' />
        <link rel='icon' href='/eye.png' />
      </Head>
      <Script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js' />
      
      <BodyGradient />
      <Header />
      <LineGradient />
      <Slider />
      <Group />
      <Accordions />
      <Footer />
    </Fragment>
  );
};

export default Home;
