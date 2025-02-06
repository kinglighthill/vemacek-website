import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Veracone Technologies",
  description:
    "Improved Learning, Better Academic Performance using Prepmate powered by Veracone Technologies",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ARm3GZOS_d4Uw6dj1R9gAwmEwwnts2kDayK1bOmYK74"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
