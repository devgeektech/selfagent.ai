import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import '../assets/scss/global.scss';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='page_layout_wrapper'>
      <Header/>
      {children}
      </div>
      <Footer/>        
        
        </body>
    </html>
  );
}