import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/ui/Header";
import Container from "@/components/ui/Container";
import { Toaster } from "react-hot-toast";
import { GetUserToken } from "@/lib/tokens";
import Provider from "@/components/ui/Provider";
import { GetUserBasket } from "@/requests/GetUserBasket";
import { BasketItem } from "@/store/UserBasketStore";

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
  let orders: BasketItem[] = [];

  if (accessToken) {
    orders = await GetUserBasket(accessToken);
  }

  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning={true} className="bg-secondary">
        <Toaster position="top-center" />
        <Provider
          orders={orders}
          accessToken={accessToken}
          refreshToken={refreshToken}
        >
          <Header />
          <Container>{children}</Container>
        </Provider>
      </body>
    </html>
  );
}
