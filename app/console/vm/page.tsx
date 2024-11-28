import { Vm, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Vm[]> {
    // Fetch data from your API here.
    return [
        {
            id: "vm-001",
            status: "success",
            created_at: "2024-11-01T10:00:00Z",
            name: "虚拟机 001",
            ip: "192.168.1.1",
            expired_at: "2024-12-01T10:00:00Z",
        },
        {
            id: "vm-002",
            status: "processing",
            created_at: "2024-11-02T09:30:00Z",
            name: "虚拟机 002",
            ip: "192.168.1.2",
            expired_at: "2024-12-02T09:30:00Z",
        },
        {
            id: "vm-003",
            status: "pending",
            created_at: "2024-11-03T08:45:00Z",
            name: "虚拟机 003",
            ip: "192.168.1.3",
            expired_at: "2024-12-03T08:45:00Z",
        },
        {
            id: "vm-004",
            status: "failed",
            created_at: "2024-11-04T07:15:00Z",
            name: "虚拟机 004",
            ip: "192.168.1.4",
            expired_at: "2024-12-04T07:15:00Z",
        },
        {
            id: "vm-005",
            status: "success",
            created_at: "2024-11-05T06:00:00Z",
            name: "虚拟机 005",
            ip: "192.168.1.5",
            expired_at: "2024-12-05T06:00:00Z",
        },
        {
            id: "vm-006",
            status: "processing",
            created_at: "2024-11-06T05:30:00Z",
            name: "虚拟机 006",
            ip: "192.168.1.6",
            expired_at: "2024-12-06T05:30:00Z",
        },
        {
            id: "vm-007",
            status: "pending",
            created_at: "2024-11-07T04:15:00Z",
            name: "虚拟机 007",
            ip: "192.168.1.7",
            expired_at: "2024-12-07T04:15:00Z",
        },
        {
            id: "vm-008",
            status: "failed",
            created_at: "2024-11-08T03:00:00Z",
            name: "虚拟机 008",
            ip: "192.168.1.8",
            expired_at: "2024-12-08T03:00:00Z",
        },
        {
            id: "vm-009",
            status: "success",
            created_at: "2024-11-09T02:45:00Z",
            name: "虚拟机 009",
            ip: "192.168.1.9",
            expired_at: "2024-12-09T02:45:00Z",
        },
        {
            id: "vm-010",
            status: "processing",
            created_at: "2024-11-10T01:30:00Z",
            name: "虚拟机 010",
            ip: "192.168.1.10",
            expired_at: "2024-12-10T01:30:00Z",
        },
    ];
}

export default async function ConsoleVMPage() {
    const data = await getData();

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
