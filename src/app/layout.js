import "../app/styles/globals.css";
import localFont from "next/font/local";
import AppWrapper from "./components/AppWrapper";

// Local fonts
const changa = localFont({
  src: [
    { path: "./fonts/Changa/Changa-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./fonts/Changa/Changa-Light.woff2",      weight: "300", style: "normal" },
    { path: "./fonts/Changa/Changa-Regular.woff2",    weight: "400", style: "normal" },
    { path: "./fonts/Changa/Changa-Medium.woff2",     weight: "500", style: "normal" },
    { path: "./fonts/Changa/Changa-SemiBold.woff2",   weight: "600", style: "normal" },
    { path: "./fonts/Changa/Changa-Bold.woff2",       weight: "700", style: "normal" },
    { path: "./fonts/Changa/Changa-ExtraBold.woff2",  weight: "800", style: "normal" },
  ],
  variable: "--font-changa",
  display: "swap",
});

const poppins = localFont({
  src: [
    { path: "./fonts/Poppins/Poppins-Light.woff2",     weight: "300", style: "normal" },
    { path: "./fonts/Poppins/Poppins-Regular.woff2",   weight: "400", style: "normal" },
    { path: "./fonts/Poppins/Poppins-Medium.woff2",    weight: "500", style: "normal" },
    { path: "./fonts/Poppins/Poppins-SemiBold.woff2",  weight: "600", style: "normal" },
    { path: "./fonts/Poppins/Poppins-Bold.woff2",      weight: "700", style: "normal" },
    { path: "./fonts/Poppins/Poppins-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/Poppins/Poppins-Black.woff2",     weight: "900", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Shatab.eg",
  description: "shatab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" className={`${changa.variable} ${poppins.variable}`}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
