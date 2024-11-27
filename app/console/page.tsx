"use client"

import ConsoleSidebar from "@/components/console-sidebar"
import { CustomNavigationBar } from "@/components/main-nav"

export default function ConsolePage() {
    return (
        <div className="min-w-full min-h-full">
            <CustomNavigationBar />
            <div className="flex">
                <ConsoleSidebar />
                <div>66666</div>
            </div>
        </div>
    )
}