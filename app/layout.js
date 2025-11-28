import "./styles/globals.css";
import "./styles/fonts.css";
import AppWrapper from "./components/AppWrapper";
import { changa, poppins } from "../public/fonts/fonts";

// ✅ إعداد بيانات الميتا العامة للموقع
export const metadata = {
  title: "Shatabha.com",
  description: "موقع شطبها - سهلها على نفسك",
  icons: {
    icon: "/favicon.ico",
  },
  viewport:
    "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
};

// ✅ تخطيط الصفحة الرئيسي (Layout)
export default function RootLayout({ children }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${changa.variable} ${poppins.variable}`}
    >
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
