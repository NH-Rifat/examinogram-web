import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Examinogram — Smart Exam Platform for Educators & Students",
  description:
    "Examinogram helps teachers create question papers in minutes, run online exams, and track student performance with deep analytics. Free to start. Available on Android & iOS.",
  keywords: [
    "exam app",
    "online exam platform",
    "question paper maker",
    "student learning app",
    "MCQ exam app",
    "exam management system",
    "smart question bank",
    "educator app Bangladesh",
    "student exam app",
    "learning management system",
  ],
  openGraph: {
    title: "Examinogram — Smart Exam Platform",
    description:
      "Create exams in minutes. Track performance. Build smarter learners.",
    url: "https://examinogram.app",
    siteName: "Examinogram",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Examinogram — Smart Exam Platform",
    description:
      "Create exams in minutes. Track performance. Build smarter learners.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://examinogram.app" },
};

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Examinogram",
  applicationCategory: "EducationApplication",
  operatingSystem: "Android, iOS",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Smart exam and learning management platform for educators and students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          id="schema-software-app"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body className="font-inter antialiased bg-[#F8FAFC] text-[#1E293B]">
        {children}
      </body>
    </html>
  );
}
