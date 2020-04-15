import Head from 'next/head'
import lottie from 'lottie-web';
import {defineLordIconElement} from 'lord-icon-element';

defineLordIconElement(lottie.loadAnimation);

const Home = () => (
  <div className="container">
    <Head>
      <title>Next App - lord-icon-sample</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <lord-icon animation="hover" src="/1-cloud-outline.json"/>
  </div>
)

export default Home
