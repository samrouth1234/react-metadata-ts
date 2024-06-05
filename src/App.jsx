import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./App.css";
import AppRouter from "./AppRouter";

const App = () => {

  const metadata = {
    title: "Home - Document Designer",
    meta: {
      description:"Likhet is a document report generator without the hassle of writing documents from scratch. ",
      keywords:"Instant Template Upload, prefill field and history log, Create documents in DOCX or PDF instantly.",
    },
    openGraph: {
      title: "Document Designer",
      description:
        "Likhet is a document report generator without the hassle of writing documents from scratch.",
      url: "https://developers-cambodia.com/",
      siteName: "Document Designer",
      images: [
        {
          url: "/public/assets/SEO/DC.png",
          width: 600,
          height: 315,
        },
      ],
      creator: "Digital Government Committee Team",
    },
    canonical: "https://developers-cambodia.com/",
    structuredData: {
      type: "WebPage",
      url: "https://developers-cambodia.com/",
      name: "Document Designer",
      description: "A new evolution of IT community support in Khmer language.",
    },
  };

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.meta.description} />
        <meta name="keywords" content={metadata.meta.keywords} />
        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta
          property="og:image:width"
          content={metadata.openGraph.images[0].width}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph.images[0].height}
        />
        <meta property="og:creator" content={metadata.openGraph.creator} />
        <link rel="canonical" href={metadata.canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": metadata.structuredData.type,
            url: metadata.structuredData.url,
            name: metadata.structuredData.name,
            description: metadata.structuredData.description,
          })}
        </script>
      </Helmet>
      {/* App Router */}
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
