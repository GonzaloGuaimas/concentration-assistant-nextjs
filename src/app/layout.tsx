import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asistente de concentración",
  description:
    "Asistente de concentración impulsado con Inteligencia Artificial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>
          <div className="relative">
            <div className="inline-flex w-full px-5 py-3 bg-white absolute top-0"></div>
            {children}
          </div>
        </body>
      </Provider>
    </html>
  );
}
