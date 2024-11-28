import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Payment[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            email: "m@example.com",
        },
        {
            id: "b123f45g",
            amount: 250,
            status: "success",
            email: "jane.doe@example.com",
        },
        {
            id: "c678h90i",
            amount: 75,
            status: "failed",
            email: "john.smith@example.com",
        },
        {
            id: "d234j56k",
            amount: 150,
            status: "pending",
            email: "alice.wonderland@example.com",
        },
        {
            id: "e345k67l",
            amount: 200,
            status: "success",
            email: "bob.builder@example.com",
        },
        {
            id: "f456l78m",
            amount: 300,
            status: "processing",
            email: "charlie.brown@example.com",
        },
        {
            id: "g567m89n",
            amount: 50,
            status: "failed",
            email: "david.jones@example.com",
        },
        {
            id: "h678n90o",
            amount: 400,
            status: "success",
            email: "eve.adams@example.com",
        },
        {
            id: "i789o01p",
            amount: 120,
            status: "pending",
            email: "frank.wright@example.com",
        },
        {
            id: "j890p12q",
            amount: 180,
            status: "processing",
            email: "grace.hopper@example.com",
        },
        {
            id: "k901q23r",
            amount: 220,
            status: "success",
            email: "henry.ford@example.com",
        },
        {
            id: "l012r34s",
            amount: 90,
            status: "failed",
            email: "isaac.newton@example.com",
        },
        {
            id: "m123s45t",
            amount: 310,
            status: "pending",
            email: "julius.caesar@example.com",
        },
        {
            id: "n234t56u",
            amount: 130,
            status: "processing",
            email: "karl.marx@example.com",
        },
        {
            id: "o345u67v",
            amount: 270,
            status: "success",
            email: "leonardo.davinci@example.com",
        },
        // Add more data as needed
    ];
}

export default async function DemoPage() {
    const data = await getData();

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
