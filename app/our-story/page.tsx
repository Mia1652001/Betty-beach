import AnnouncementBar from "../components/AnnouncementBar";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export const metadata = {
  title: "Our Story — Betty Beach",
  description: "Learn about the story behind Betty Beach.",
};

export default function OurStoryPage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
