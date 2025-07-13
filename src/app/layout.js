import "./styles/fonts.module.css"
import '../app/styles/globals.css'; 
import Navbar from './components/Navbar';
import styles from './styles/navbar.module.css';

import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

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
        <div className="mainContainer">
          {children}
          <div className="mobNav">
            <Navbar />
          </div>
        </div>
      </body>
    </html>
  );
}
