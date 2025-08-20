import "../app/styles/globals.css";
import AppWrapper from "./components/AppWrapper";
import { changa, poppins } from "../../public/fonts/fonts";
import "./styles/fonts.css";

export const metadata = {
  title: "Shatab.eg",
  description: "shatab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${changa.variable} ${poppins.variable}`}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
