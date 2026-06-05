import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RemitStudy Vault",
  description: "A remittance-linked education loan vault that converts family support into transparent tuition escrow and repayment records.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
