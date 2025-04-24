import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "فروشگاه جانبی",
  description: "فروشگاه فروش لوازم جانبی و الکترونیکی در ایران",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning={true}>
        <Header />
        <Container>{children}</Container>
      </body>
    </html>
  );
}
