import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import EditorialBanner from "./components/EditorialBanner";
import About from "./components/About";
import InstagramGrid from "./components/InstagramGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <EditorialBanner />
      <About />
      <InstagramGrid />
      <Footer />
    </main>
  );
}
