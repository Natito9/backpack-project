import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Backpack",
  description: "A digital friend supporting emotional exploration and self-awarness",
  icons: {
    icon: "/emmo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/emmo.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/emmo.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/emmo.ico" />
      </head>
      <body
        className={`${notoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

