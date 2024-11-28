"use client";

import ConsoleSidebar from "@/components/console-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function ConsoleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* 左变侧栏 */}
      <ConsoleSidebar />
      {/* 右内容 */}
      <div className="top-16">
        <div className="flex items-center gap-2 px-4 py-2">
          <SidebarTrigger />
          {/* TODO：面包屑 */}
          {children}
        </div>
      </div>
    </div>
  );
}
