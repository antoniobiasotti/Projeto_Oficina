import { Nunito } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header.jsx";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
