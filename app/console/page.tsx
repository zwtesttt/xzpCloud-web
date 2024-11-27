"use client";

import ConsoleSidebar from "@/components/console-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ConsolePage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <ConsoleSidebar />
      <div className="top-16">
        <div className="flex items-center gap-2 px-4 py-2">
          <SidebarTrigger />
          {/* TODO：面包屑 */}
          <div className="text-sm font-medium">控制台</div>
        </div>
        {children}
      </div>
    </div>
  );
}
