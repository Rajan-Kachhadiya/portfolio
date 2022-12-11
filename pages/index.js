import React from "react";
import Layout from "../components/layout";
import { WelcomeBanner, Features, Portfolio } from "../components/homepage";

export default function Index() {
  return (
    <Layout>
      <WelcomeBanner />
      <Features />
      <Portfolio />
    </Layout>
  )
}