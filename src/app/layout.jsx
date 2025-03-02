import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default : 'NextJS 14 homepage',
    template : "%s | NEXT JS 14"
  },
  description: "Blogger creates new experiance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar />
        {children}
        <Footer />
        </div>
        </body>
    </html>
  );
}
