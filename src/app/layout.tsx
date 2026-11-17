import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteData } from "@/data/academyData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.url),
  title: {
    default: siteData.title,
    template: `%s | ${siteData.name}`,
  },
  description: siteData.description,
  keywords: siteData.keywords,
  authors: [{ name: siteData.name }],
  creator: siteData.name,
  publisher: siteData.name,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteData.url,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteData.url,
    title: siteData.title,
    description: siteData.description,
    siteName: siteData.name,
    images: [
      {
        url: siteData.ogImage,
        width: 1200,
        height: 630,
        alt: siteData.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.title,
    description: siteData.description,
    images: [siteData.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": siteData.geo.region,
    "geo.placename": siteData.geo.placename,
    "geo.position": `${siteData.geo.lat};${siteData.geo.lng}`,
    ICBM: `${siteData.geo.lat}, ${siteData.geo.lng}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced Schema.org Graph (WebSite + EducationalOrganization + LocalBusiness)
  // Compliant with Claude SEO and Google Search Central Guidelines
  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteData.url}#website`,
        url: siteData.url,
        name: siteData.name,
        description: siteData.description,
        publisher: {
          "@id": `${siteData.url}#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteData.url}courses?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${siteData.url}#organization`,
        name: siteData.name,
        legalName: siteData.name,
        url: siteData.url,
        logo: {
          "@type": "ImageObject",
          url: siteData.ogImage,
          caption: siteData.name,
        },
        image: siteData.ogImage,
        description: siteData.description,
        telephone: siteData.phone,
        priceRange: "₹₹",
        hasMap: `https://maps.google.com/?q=${siteData.geo.lat},${siteData.geo.lng}`,
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "148, A B Gopalsamy Koil Street, Sridevi Nagar, Ganapathy",
          addressLocality: "Coimbatore",
          addressRegion: "Tamil Nadu",
          postalCode: "641006",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteData.geo.lat,
          longitude: siteData.geo.lng,
        },
        areaServed: {
          "@type": "City",
          name: "Coimbatore",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
