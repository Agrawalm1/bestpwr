import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bestpwr.com"),
  title: {
    default: "BESTPWR — Best Texas Electricity Rates",
    template: "%s — BESTPWR",
  },
  description: "Compare and shop the best Texas electricity plans. Fixed rates, no hidden fees, no variable plans. Find the lowest rate in your area today.",
  keywords: ["Texas electricity", "best electricity rates Texas", "cheap electricity Texas", "electricity plans", "ERCOT", "deregulated energy Texas", "fixed rate electricity"],
  authors: [{ name: "BESTPWR" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bestpwr.com",
    siteName: "BESTPWR",
    title: "BESTPWR — Best Texas Electricity Rates",
    description: "Compare and shop the best Texas electricity plans. Fixed rates, no hidden fees. Find the lowest rate in your area today.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1.png",
        width: 1862,
        height: 400,
        alt: "BESTPWR — Best Texas Electricity Rates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BESTPWR — Best Texas Electricity Rates",
    description: "Compare and shop the best Texas electricity plans. Fixed rates, no hidden fees.",
    images: ["https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc3a7bdae1587a108483df_BESTPWR-logo-v1.png"],
  },
  icons: {
    icon: "https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc620500abf3510e4ef9ba_bestpwr-favicon.png",
    apple: "https://cdn.prod.website-files.com/66bc06c69f291ffe53220431/66bc620abf62c2412ce3e8d6_bestpwr-webclip.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-white text-gray-900`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
