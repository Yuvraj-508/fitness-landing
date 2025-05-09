// app/layout.js
import './globals.css';
import { Sora } from 'next/font/google';
import Navbar from './component/Navbar';
import Footer from './component/Fotter'; // ✅ Corrected name

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My App</title>
      </head>
      <body className={sora.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

