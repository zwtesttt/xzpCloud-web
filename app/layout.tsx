import type { Metadata } from "next";
import "../styles/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "xzpCloud",
  description: "xzpCloud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
