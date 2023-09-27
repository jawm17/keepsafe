import React, { useState } from "react";
import "./homeStyle.css";

// Imported Compomnets
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Supporters from "../../components/Supporters";
import Info from "../../components/Info";
import FAQComp from "../../components/FAQComp";
import Action from "../../components/Action";
import Form from "../../components/Form";
import Alerts from "../../components/Alerts";
import Footer from "../../components/Footer";

export default function Home() {

  return (
    <div id="homePage">
      {/*===== Header =====*/}
      <Header />
      {/*===== Hero =====*/}
      <Hero />
      {/*===== Supporters =====*/}
      <Supporters />
      {/*===== Info =====*/}
      <Info />
      {/*===== FAQ =====*/}
      <FAQComp />
      {/*===== Action =====*/}
      <Action />
      {/*===== Form =====*/}
      <Form />
      {/*===== Alerts =====*/}
        <Alerts />
      {/*===== Footer =====*/}
        <Footer />
    </div>
  );
}
