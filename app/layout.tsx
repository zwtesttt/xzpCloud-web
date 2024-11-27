import type { Metadata } from "next";
import "../styles/globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CustomNavigationBar } from "@/components/main-nav";

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
    <html>
      <body>
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
