import "./styles/globals.css";
import AppWrapper from "./components/AppWrapper";
import { changa, poppins } from "../public/fonts/fonts";
import "./styles/fonts.css";

export const metadata = {
  title: "Shatabha.com",
  description: "shatab",
    icons: {
    icon: '/favicon.ico',
  },
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
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
