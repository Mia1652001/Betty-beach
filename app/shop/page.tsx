import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

export const metadata = {
  title: "Shop — Betty Beach",
  description: "Shop Betty Beach swimwear and resort wear.",
};

export default function ShopPage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
