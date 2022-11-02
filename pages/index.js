import Navbar from '../pages/component/hotel/Navbar';
import About from '../pages/component/hotel/About';
import World from '../pages/component/hotel/World';
import Blog from '../pages/component/hotel/blog';
import Gallery from '../pages/component/hotel/Gallery';
import Footer from '../pages/component/hotel/Footer';

export default function Home() {
  return (
    <div>
    <Navbar />
    <About />
    <World />
    <Blog />
    <Gallery />
    <Footer />
  </div>
  )
}
