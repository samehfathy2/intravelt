import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Crucial: Import the Script component

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WebTools Master - Free Text Rewriter, Robots.txt & Sitemap Tools",
    description:
        "Enhance your web presence with WebTools Master. Free Text Rewriter & Spinner, Robots.txt Fetching, and Sitemap Analysis for content creation and SEO optimization. Fast, reliable, and easy to use.",
    keywords: [
        "web tools",
        "free tools",
        "text rewriter",
        "article spinner",
        "robots.txt fetcher",
        "sitemap analysis",
        "SEO tools",
        "content creation",
        "content optimization",
        "website tools",
        "intravelt",
    ],
    authors: [{ name: "WebTools Master" }],
    creator: "WebTools Master",
    openGraph: {
        title: "WebTools Master",
        description:
            "Enhance your web presence with WebTools Master. Free Text Rewriter & Spinner, Robots.txt Fetching, and Sitemap Analysis for content creation and SEO optimization. Fast, reliable, and easy to use.",
        url: "https://www.intravelt.com/",
        type: "website",
        locale: "en_US",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    appleWebApp: {
        title: "WebTools Master",
        capable: true,
        statusBarStyle: "default",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head suppressHydrationWarning>
                <meta name='application-name' content='WebTools Master' />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta
                    name='msapplication-config'
                    content='/favicon/browserconfig.xml'
                />
                {/* Google Search Console Meta Tag (keep it here) */}
                <meta
                    name='google-site-verification'
                    content='V3pfjF6FlsO8sc3Ktr8dK2y_Imr7jUE3jPn7OYf7lHk'
                />
                {/* Google AdSense Site Verification Meta Tag - ADD THIS LINE */}
                <meta name="google-adsense-account" content="ca-pub-6387676660368728" />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <Header />
                <main>{children}</main>
                <Footer />

                {/* Google Analytics Script using next/script */}
                {/* IMPORTANT: Replace 'G-9W79M5JY32' with your actual Google Analytics Measurement ID */}
                <Script
                    src='https://www.googletagmanager.com/gtag/js?id=G-9W79M5JY32'
                    strategy='afterInteractive' // Recommended for analytics
                />
                <Script id='google-analytics-inline' strategy='afterInteractive'>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-9W79M5JY32'); // Replace with your GA Measurement ID again
                    `}
                </Script>

                {/* Google AdSense Ad Serving Script using next/script */}
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6387676660368728"
                    crossOrigin="anonymous" // Crucial fix: 'crossOrigin' with capital 'O'
                    strategy="lazyOnload" // 'lazyOnload' is a good strategy for AdSense
                />
            </body>
        </html>
    );
}
