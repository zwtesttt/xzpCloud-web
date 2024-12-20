import { Airplay, Gauge, NotebookTabs } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
    {
        title: "仪表盘",
        url: "/console/dashboard",
        icon: Gauge,
    },
    {
        title: "虚拟机管理",
        url: "/console/vm",
        icon: Airplay,
    },
    {
        title: "订单管理",
        url: "/console/order",
        icon: NotebookTabs,
    },
];

export default function ConsoleSidebar() {
    return (
        <Sidebar className="pt-16">
            <SidebarContent>
                <SidebarGroup className="pl-4">
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
