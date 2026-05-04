import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notionize · Notion-native AI agents",
  description: "Premium Notion templates and short, fixed-scope pilots that turn them into Notion-native AI agents your team will actually use.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
