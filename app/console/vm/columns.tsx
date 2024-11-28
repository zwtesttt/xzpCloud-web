"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Vm = {
    id: string
    name: string
    status: "pending" | "processing" | "success" | "failed"
    ip: string
    created_at: string
    expired_at: string
}

export const columns: ColumnDef<Vm>[] = [
    {
        accessorKey: "id",
        header: "虚拟机序号",
    },
    {
        accessorKey: "name",
        header: "名称",
    },

    {
        accessorKey: "status",
        header: "状态",
    },
    {
        accessorKey: "ip",
        header: "IP地址",
    },
    {
        accessorKey: "expired_at",
        header: "过期时间",
    },
    {
        accessorKey: "created_at",
        header: "创建时间",
    },
    {
        id: "操作",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(payment.id)}
                        >
                            Copy payment ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]
