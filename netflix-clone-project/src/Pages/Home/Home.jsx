import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import RowList from "../../components/Rows/RowList/RowList";

const Home = () => {
  return (
    <>
      {/* //Netflix Home page component that will render the header and footer
      components */}
      <Header />
      <br />
      <br />
      <br />
      <Banner />

      <br />
      <br />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
