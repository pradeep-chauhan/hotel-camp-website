import Navbar from '../pages/component/hotel/Navbar';
import About from '../pages/component/hotel/About';
import World from '../pages/component/hotel/World';
import Blog from '../pages/component/hotel/blog';
import Gallery from '../pages/component/hotel/Gallery';
import Footer from '../pages/component/hotel/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Desert Safari | Jaisalmer Desert Safari | Desert Safari Jaisalmer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Desert Safari | Jaisalmer Desert Safari | Desert Safari Jaisalmer" key="title" />
        <meta property="og:description" content="Located amidst the wide region of Great Indian Desert, we offers you an exclusive stay where you can enjoy an exciting camel safari to sunset point. Get to enjoy the Rajasthani Folk dance and music. Get to explore the traditional Rajasthani cuisine" key="desc" />
        <meta property='og:keywords' content="Desert Safari, Jaisalmer Desert Safari, Campfire, Jaisalmer Best Desert Safari, Jaisalmer Desert Safari tour, Camel Riding, Traditional music and folk dance, Sightseeing, Best Desert Safari, Desert Jeep Dune Bashing, Khabha Tour " key="keywords" />

      </Head>
      <Navbar />
      <About />
      <World />
      <Blog />
      <Gallery />
      <Footer />
    </div>
  )
}
