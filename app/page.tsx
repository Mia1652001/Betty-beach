import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import EditorialBanner from "./components/EditorialBanner";
import CategoryMosaic from "./components/CategoryMosaic";
import AsSeenOn from "./components/AsSeenOn";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <EditorialBanner />
      <CategoryMosaic />
      <AsSeenOn />
      <Footer />
    </main>
  );
}
