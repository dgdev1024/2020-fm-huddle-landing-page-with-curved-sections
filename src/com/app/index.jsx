import React, { useState } from "react";
import Header from "../header";
import HeroSection from "../hero-section";
import FeaturesSection from "../features-section";
import Footer from "../footer";

const App = () => {
  const [dark, setDark] = useState(false);
  const toggleDark = () => setDark(!dark);

  return (
    <main className={dark ? "dark" : ""}>
      <Header toggleDark={toggleDark} />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
};

export default App;
