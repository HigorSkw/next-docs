import '@/app/ui/global.css';

// Não consigo consumir API externa
// import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`}>{children}</body> */}
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
