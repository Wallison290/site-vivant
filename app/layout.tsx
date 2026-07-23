import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vivant-estetica.sites.openai.com"),
  title: {
    default: "Vivant Estética | Estética avançada em Petrolina",
    template: "%s | Vivant Estética",
  },
  description:
    "Clínica de estética em Petrolina com atendimento personalizado, tecnologia avançada e foco em resultados naturais. Agende sua avaliação.",
  keywords: [
    "clínica de estética em Petrolina",
    "estética avançada Petrolina",
    "harmonização facial Petrolina",
    "tratamento corporal Petrolina",
    "Vivant Estética",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vivant Estética | Sua beleza com naturalidade",
    description:
      "Atendimento personalizado, tecnologia avançada e resultados que respeitam quem você é.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/ubia-torres-retrato.png",
        width: 1155,
        height: 1362,
        alt: "Vivant Estética em Petrolina",
      },
    ],
  },
  icons: {
    icon: "/assets/logo-vivant-estetica.png",
  },
  other: {
    "codex-preview": "development",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
