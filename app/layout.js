
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='light'>
      <body
        className={`antialiased`}
      >
        <Providers>
        <Navbar />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
