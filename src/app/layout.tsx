import "./globals.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "Veracone",
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
          content="ATsY4ZF8FViyNDri5OBOCP2y9Cqt-5rLy-LCynivq1k"
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
