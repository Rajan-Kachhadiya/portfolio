import React from "react";
import Layout from "../components/layout";
import { WelcomeBanner, Features, Portfolio, Resume, Contact } from "../components/homepage";
import ScrollTop from "../components/partial/scrolltop";

export default function Index() {
  return (
    <Layout>
      <WelcomeBanner />
      <Features />
      <Portfolio />
      <Resume />
      <Contact />
      <ScrollTop />
    </Layout>
  )
}