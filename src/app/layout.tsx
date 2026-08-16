import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { contact, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Imagination Arts | Art Classes in Ardenwood, Fremont",
    template: "%s | Imagination Arts",
  },
  description: "Playful, skill-building art classes for artists ages four and up, including kids, teens, and adults in Fremont's Ardenwood neighborhood.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_US",
    siteName: "Imagination Arts",
    title: "Imagination Arts | Art Classes in Ardenwood, Fremont",
    description: "Big imaginations start with one colorful idea.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Imagination Arts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imagination Arts | Art Classes for Ages 4+",
    description: "Joyful art classes for kids, high schoolers, and adults in Fremont.",
    images: [{ url: "/opengraph-image", alt: "Imagination Arts art classes" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ArtSchool",
    name: "Imagination Arts",
    description: "Art classes for artists ages four and up, including kids, teens, and adults in the Ardenwood area of Fremont, California.",
    email: contact.email,
    telephone: contact.phoneInternational,
    areaServed: { "@type": "City", name: "Fremont", address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" } },
    url: siteUrl,
  };

  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
