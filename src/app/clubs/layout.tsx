import type { Metadata } from "next";
import "./globals.css";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "NML | Clubs",
  description: "Powered by MofD",
};
