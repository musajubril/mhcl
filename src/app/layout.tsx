import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MHCL",
  description: "Mangroove Hills Consulting Limited",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased bg-[#fff]`}
      >
      {/* <body
        className={`${poppins.className} antialiased bg-white`}
      > */}
        <div className="w-full max-w-[1440px] mx-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
