
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-500">
      <Navbar />
         <div className="container  mx-auto px-12 py-4 "> 
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectSection />
            <EmailSection />
         </div>
         <Footer />   
    </main>
  );
}
