import localFont from "next/font/local";
import "./globals.css";
import { ReactNode } from "react"; // ✅ Import ReactNode for type safety

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Merhaj Portfolio",
  description: "Welcome to my personal portfolio website.",
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ Explicitly define the type for children
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
