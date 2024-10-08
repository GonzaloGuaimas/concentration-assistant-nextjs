import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Provider from "@/utils/Provider";

const inter = Raleway({ subsets: ["latin"] });

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
          <div className="bg-light_white">{children}</div>
        </body>
      </Provider>
    </html>
  );
}
