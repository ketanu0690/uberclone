import { Montserrat } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/NavBar/nav-bar';
import { Metadata } from 'next';
import { MantineProvider } from '@mantine/core';  // No need to import createTheme from Mantine
import '@mantine/core/styles.css';


const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uber Clone Next App',
  description: 'Clone of Uber using Next.js',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {/* MantineProvider should wrap body content */}
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
