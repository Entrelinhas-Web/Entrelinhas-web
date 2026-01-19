import type { Metadata } from "next";
import "./globals.css";
import BgParticles from "../components/bgParticles";

export const metadata: Metadata = {
  title: "Entrelinhas Web",
  description: "Sua página de registros e controle emocional!",
  icons: {
    icon: "/logo.png", 
  },
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased`}
      >
        <BgParticles />
        {children}
      </body>
    </html>
  );
}
