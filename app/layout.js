import Fotter from "./component/Fotter";
import Navbar from "./component/Navbar";
import './globals.css'
// app/layout.tsx
import { Sora } from 'next/font/google';

export const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600','700'], // Only the bold 700 weight
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={sora.className}>
        
        {/* <header>My Navbar</header> */}
        <Navbar/>
        {children}
        <Fotter/>
        {/* <footer>My Footer</footer> */}
      </body>
    </html>
  );
}
