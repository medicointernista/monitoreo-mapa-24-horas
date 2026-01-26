import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Monitoreo MAPA 24 Horas | Dr. Willmer Obregón",
  description: "🩺 Agenda tu monitoreo MAPA 24 horas con el Dr. Willmer Obregón. Diagnóstico preciso de presión arterial para tu salud cardiovascular. ¡Agenda hoy!",
  robots: "index, follow",
  icons: {
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/c27c3349-49e9-4c2d-beb2-aa8ac8f366b4/logotipo_1-1769434420361.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className="antialiased" suppressHydrationWarning>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c27c3349-49e9-4c2d-beb2-aa8ac8f366b4"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
