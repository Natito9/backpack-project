import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata = {
  title: "Backpack Studios",
  description: "A digital friend supporting emotional exploration and self-awarness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

