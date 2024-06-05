import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { Helmet } from "react-helmet";

export const metadata = {
  title: "Home page",
  description: "This is Project Demo Page",
  metadataBase: new URL("https://acme.com"),
  locale: "en-US",
  mainfest: "/mainfest.json",
  type: "wen site",
  siteName: "Prodict",
  category: "education",
  openGraph: {
    title: "Open Graph",
    description: "Interactive",
    url: "/",
    siteName: "Open Graph",
    images:
      "https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/overhead-view-of-business-strategy-meeting.jpg&w=1200&h=630",
  },
};

export default function AppLayout() {
  return (
    <div>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="locale" content={metadata.locale} />
        <link rel="manifest" href={metadata.manifest} />

        {/* Open Graph metadata */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images} />

        {/* Additional metadata if needed */}
        <meta name="category" content={metadata.category} />
        <meta name="type" content={metadata.type} />
        <meta name="siteName" content={metadata.siteName} />
      </Helmet>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
