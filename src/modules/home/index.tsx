import Head from 'next/head';
import type { NextPage } from 'next';
import Container from './container';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Container />
    </>
  );
};

export default Home;
