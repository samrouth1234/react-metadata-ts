import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

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
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
