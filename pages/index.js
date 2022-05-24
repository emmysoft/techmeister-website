import Head from 'next/head';
import LandingPage from '../features/LandingPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Techmeister Coding Academy</title>
        <meta name="description" content="welcome to the homepage of the best online tech school ever" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage/>
    </div> 
  )
}
