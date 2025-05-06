import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Backpack",
  description: "A digital friend supporting emotional exploration and self-awarness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

