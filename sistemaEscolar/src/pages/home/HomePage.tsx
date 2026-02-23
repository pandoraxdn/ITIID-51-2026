//import Header from "@/components/Header";
//import HeroSection from "@/components/HeroSection";
//import AboutSection from "@/components/AboutSection";
//import AcademicOfferSection from "@/components/AcademicOfferSection";
//import AdmissionsSection from "@/components/AdmissionsSection";
//import NewsSection from "@/components/NewsSection";
//import ContactSection from "@/components/ContactSection";
//import Footer from "@/components/Footer";
import {Header} from "./sections/Header";
import {HeroSection} from "./sections/Hero";
import {AboutSection} from "./sections/AboutSection";
import {AcademicOfferSection} from "./sections/AcademicOfferSection";
import {AdmissionsSection} from "./sections/AdmissionsSection";
import {NewsSection} from "./sections/NewsSection";
import {ContactSection} from "./sections/ContactSection";
import {Footer} from "./sections/Footer";
//import './styles/web.css'

export const HomePage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <AcademicOfferSection />
      <AdmissionsSection />
      <NewsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
