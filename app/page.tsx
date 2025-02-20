import Hero from "./components/Hero";
import WearYourStory from "./components/WearYourStory";
import FeatureCarousel from "./components/FeatureCarousel";
import PortfolioGrid from "./components/PortfolioGrid";
import Timeline from "./components/Timeline";
import Marquee from "./components/Marquee";
import ContactForm from "./components/ContactForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ProductShowcase from "./components/ProductShowcase";
import Head from "next/head";


export default function Home() {
  return (
    <>
    <Head>
        <title>My Custom Page Title</title>
        <meta name="description" content="This is my portfolio website." />
      </Head>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="marquee">
        <Marquee />
      </div>
      <div id="wearYourStory">
        <AboutUs />
      </div>
      <div>
        <WearYourStory />
      </div>
      <FeatureCarousel />
      <div id="services">
      <Services />
      </div>
      <ProductShowcase />
      <div id="portfolioGrid">
        <PortfolioGrid />
      </div>
      <div id="experience">
        <Timeline />
      </div>
      <div id="testimonials">
      <Testimonials />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
