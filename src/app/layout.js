import "./globals.css";
import "remixicon/fonts/remixicon.css";

import SmoothScroll from "@/utils/SmoothScroll";
import Cursor from "@/utils/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "DigiCheck",
  description: "Product by Almasons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="preload"
          href="/bandeins.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Roboto-Black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/fav.png" type="image/png" />
      </head>
      <body className="antialiased relative" cz-shortcut-listen="true">
        <SmoothScroll />
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
