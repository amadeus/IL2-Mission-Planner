import type {Metadata} from 'next';
import Script from 'next/script';

interface RootLayout {
  children: React.ReactNode;
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
