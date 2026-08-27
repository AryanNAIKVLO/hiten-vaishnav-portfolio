import "./globals.css";
import { JetBrains_Mono, Archivo_Black } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

const display = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata = {
  title: "Hiten Vaishnav — Cinematography",
  description: "Director of photography portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mono.variable} ${display.variable}`}>{children}</body>
    </html>
  );
}
