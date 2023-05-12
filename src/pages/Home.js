import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  document.title = "Kasa - Accueil";
  return (
    <div>
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;
