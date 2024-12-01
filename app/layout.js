import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import "./globals.css";

export const metadata = {
  title: "地址生成器",
  description: "",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/app/icon.png" />
      </head>
      <body>
        <Theme appearance="light" accentColor="blue" grayColor="slate" radius="medium" scaling="100%">
          {children}
        </Theme>
      </body>
    </html>
  );
}
