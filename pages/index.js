import Head from 'next/head'
import dynamic from 'next/dynamic';
const DynamicLordIcon = dynamic(() => import('../components/LordIcon'), {
    ssr: false
});

const Home = () => (
  <div className="container">
    <Head>
      <title>Next App - lord-icon-sample</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <DynamicLordIcon />
  </div>
)

export default Home
