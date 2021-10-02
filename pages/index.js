import Head from 'next/head'

import Sidebar from '../components/Sidebar'

const Home = () =>
  <>
    <Head>
      <title>stelima</title>
      <link rel='icon' type='image/png' href='/photo.png' />
      <meta name='description' content='Desenvolvedora Front-end'/>
      <meta property='og:title' content='Stefanie Lima'/>
      <meta property='og:description' content='Desenvolvedora Front-end'/>
      <meta property='og:url' content='https://stelima.dev'/>
      <meta property='og:image' content='/photo.png'/>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png'/>
      <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png'/>
      <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png'/>
      <link rel='preconnect' href='https://fonts.googleapis.com'/>
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin/>
      <link href='https://fonts.googleapis.com/css2?family=Faustina&family=Poppins&display=swap' rel='stylesheet'/>
    </Head>
    <Sidebar/>
  </>

export default Home
