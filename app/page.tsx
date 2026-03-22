import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EditorialBanner from "./components/EditorialBanner";
import CategoryMosaic from "./components/CategoryMosaic";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <EditorialBanner />
      <CategoryMosaic />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
