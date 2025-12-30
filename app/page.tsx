import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductsOverview from "./components/ProductsOverview";
import TextToSpeech from "./components/TextToSpeech";
import SpeechToText from "./components/SpeechToText";
import AIChat from "./components/AIChat";
import Pricing from "./components/Pricing";
import SocialProof from "./components/SocialProof";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Fixed Elements */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Products Overview */}
        <ProductsOverview />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Text-to-Speech Feature */}
        <TextToSpeech />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Speech-to-Text Feature */}
        <SpeechToText />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* AI Chat Feature */}
        <AIChat />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Pricing Section */}
        <Pricing />

        {/* Section Divider */}
        <div className="section-divider" />

        {/* Social Proof */}
        <SocialProof />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </SmoothScroll>
  );
}
