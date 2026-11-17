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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: siteData.name,
    url: siteData.url,
    description: siteData.description,
    telephone: siteData.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "148, A B Gopalsamy Koil Street, Sridevi Nagar, Ganapathy",
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
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
