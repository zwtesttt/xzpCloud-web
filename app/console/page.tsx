"use client"

import ConsoleSidebar from "@/components/console-sidebar"
import { CustomNavigationBar } from "@/components/main-nav"

export default function ConsolePage() {
    return (
        <div>
            <CustomNavigationBar />
            <div className="flex mt-16">
                <ConsoleSidebar />
                <div className="flex-1 bg-red-500">
                    <div>66666</div>
                </div>
            </div>
        </div>
    )
}