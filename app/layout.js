import { Aleo } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header/Header";
import Footer from "@/src/components/Footer/Footer";



const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

  export default function RootLayout({ children }) {
    return (
      <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={aleo.className}>

        <Header />

        {children}
        
        <Footer />

      </body>
    </html>
  );
}