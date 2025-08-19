import '../app/styles/globals.css';
import AppWrapper from './components/AppWrapper';

export const metadata = {
  title: "Shatab.eg",
  description: "shatab",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
