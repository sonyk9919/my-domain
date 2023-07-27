import { Metadata } from "next";
import RootLayoutProvider from "./components/RootLayoutProvider";

export const metadata: Metadata = {
  title: "sonyk9919의 개인 페이지",
  description: "아무거나 잡다한거 올리는 공간 ㅋㅋ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <RootLayoutProvider>{children}</RootLayoutProvider>
      </body>
    </html>
  );
}
