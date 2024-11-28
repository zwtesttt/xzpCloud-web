import type { Metadata } from "next";
import "../styles/globals.css";
import localFont from 'next/font/local'
import { SidebarProvider } from "@/components/ui/sidebar";
import { CustomNavigationBar } from "@/components/main-nav";

export const metadata: Metadata = {
  title: "xzpCloud",
  description: "xzpCloud",
};

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
          <main className="w-screen h-screen overflow-hidden">
            <CustomNavigationBar />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
