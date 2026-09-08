import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LoadingScreen, loaderBootScript } from "@/components/LoadingScreen";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "OurCloud | One technology partner for your business",
  description:
    "New Zealand-owned technology, infrastructure and support. Managed IT, cloud, data centre, Sophos, connectivity and consulting — working together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LoadingScreen />
        <script dangerouslySetInnerHTML={{ __html: loaderBootScript }} />
        <ThemeProvider>
          <a
            href="#main"
            className="absolute left-[-999px] focus:left-4 focus:top-4 focus:z-50 focus:bg-yellow focus:px-3 focus:py-2 focus:text-ink"
          >
            Skip to content
          </a>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
