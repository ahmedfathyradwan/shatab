import localFont from "next/font/local";

export const changa = localFont({
  src: [
    { path: "./Changa/Changa-ExtraLight.woff2", weight: "200", style: "normal" },
    { path: "./Changa/Changa-Light.woff2", weight: "300", style: "normal" },
    { path: "./Changa/Changa-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Changa/Changa-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Changa/Changa-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./Changa/Changa-Bold.woff2", weight: "700", style: "normal" },
    { path: "./Changa/Changa-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-changa",
});

export const poppins = localFont({
  src: [
    { path: "./Poppins/Poppins-Light.woff2", weight: "300", style: "normal" },
    { path: "./Poppins/Poppins-Regular.woff2", weight: "400", style: "normal" },
    { path: "./Poppins/Poppins-Medium.woff2", weight: "500", style: "normal" },
    { path: "./Poppins/Poppins-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./Poppins/Poppins-Bold.woff2", weight: "700", style: "normal" },
    { path: "./Poppins/Poppins-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./Poppins/Poppins-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-poppins",
});
