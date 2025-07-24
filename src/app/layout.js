import "./styles/fonts.module.css";
import "../app/styles/globals.css";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import AppWrapper from "./components/AppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shatab.eg",
  description: "shatab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
