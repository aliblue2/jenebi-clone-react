import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";
import { Toaster } from "react-hot-toast";
import { GetUserToken } from "@/lib/tokens";
import Provider from "@/components/ui/Provider";

export const metadata: Metadata = {
  title: "فروشگاه جانبی",
  description: "فروشگاه فروش لوازم جانبی و الکترونیکی در ایران",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken, refreshToken } = await GetUserToken();
  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning={true}>
        <Toaster position="top-center" />
        <Provider accessToken={accessToken} refreshToken={refreshToken}>
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
