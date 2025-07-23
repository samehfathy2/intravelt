import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "WebTools Master - Free Text Rewriter, Robots.txt & Sitemap Tools",
description:
    "Enhance your web presence with WebTools Master. Free Text Rewriter & Spinner, Robots.txt Fetching, and Sitemap Analysis for content creation and SEO optimization. Fast, reliable, and easy to use.",
keywords:
    "web tools, free tools, text rewriter, article spinner, robots.txt fetcher, sitemap analysis, SEO tools, content creation, content optimization, website tools, intravelt",
	authors: [{ name: "WebTools Pro" }],
	creator: "WebTools Master",
	openGraph: {
		title: "WebTools Master",
		description:
    "Enhance your web presence with WebTools Master. Free Text Rewriter & Spinner, Robots.txt Fetching, and Sitemap Analysis for content creation and SEO optimization. Fast, reliable, and easy to use.",
url: "https://www.intravelt.com/", // Updated URL
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
		title: "WebTools Pro",
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
				<meta name='application-name' content='WebTools Pro' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta
					name='msapplication-config'
					content='/favicon/browserconfig.xml'
				/>
				{/* add search console meta tag here */}
				<meta
					name='google-site-verification'
					content='V3pfjF6FlsO8sc3Ktr8dK2y_Imr7jUE3jPn7OYf7lHk'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-XXXXXXXXXX');
					`,
					}}></script>

				{/* Google AdSense */}
				<script
					async
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX'
					crossOrigin='anonymous'></script>
			</head>
			<body className={inter.className} suppressHydrationWarning>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
