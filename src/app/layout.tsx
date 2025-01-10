import React from "react";
import localFont from "next/font/local";
import LayoutRecoil from "./layout.recoil";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

const pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pretendard.className}>
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
