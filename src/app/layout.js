import "./globals.css";
import "remixicon/fonts/remixicon.css";

import ClientWrapper from "@/components/ClientWrapper";

export const metadata = {
  title: "DigiCheck",
  description: "Product by Almasons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased relative"  cz-shortcut-listen="true">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
