import { Order, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Order[]> {
    // Fetch data from your API here.
    return [
        {
            id: "728ed52f",
            amount: 100,
            status: "pending",
            created_at: "2023-10-01T10:00:00Z",
            pay_at: "2023-10-02T10:00:00Z",
        },
        {
            id: "b123f45g",
            amount: 250,
            status: "success",
            created_at: "2023-10-03T11:00:00Z",
            pay_at: "2023-10-04T11:00:00Z",
        },
        {
            id: "c678h90i",
            amount: 75,
            status: "failed",
            created_at: "2023-10-05T12:00:00Z",
            pay_at: "2023-10-06T12:00:00Z",
        },
        {
            id: "d234j56k",
            amount: 150,
            status: "pending",
            created_at: "2023-10-07T13:00:00Z",
            pay_at: "2023-10-08T13:00:00Z",
        },
        {
            id: "e345k67l",
            amount: 200,
            status: "success",
            created_at: "2023-10-09T14:00:00Z",
            pay_at: "2023-10-10T14:00:00Z",
        },
        {
            id: "f456l78m",
            amount: 300,
            status: "processing",
            created_at: "2023-10-11T15:00:00Z",
            pay_at: "2023-10-12T15:00:00Z",
        },
        {
            id: "g567m89n",
            amount: 50,
            status: "failed",
            created_at: "2023-10-13T16:00:00Z",
            pay_at: "2023-10-14T16:00:00Z",
        },
        {
            id: "h678n90o",
            amount: 400,
            status: "success",
            created_at: "2023-10-15T17:00:00Z",
            pay_at: "2023-10-16T17:00:00Z",
        },
        {
            id: "i789o01p",
            amount: 120,
            status: "pending",
            created_at: "2023-10-17T18:00:00Z",
            pay_at: "2023-10-18T18:00:00Z",
        },
        {
            id: "j890p12q",
            amount: 180,
            status: "processing",
            created_at: "2023-10-19T19:00:00Z",
            pay_at: "2023-10-20T19:00:00Z",
        },
        {
            id: "k901q23r",
            amount: 220,
            status: "success",
            created_at: "2023-10-21T20:00:00Z",
            pay_at: "2023-10-22T20:00:00Z",
        },
        {
            id: "l012r34s",
            amount: 90,
            status: "failed",
            created_at: "2023-10-23T21:00:00Z",
            pay_at: "2023-10-24T21:00:00Z",
        },
        {
            id: "m123s45t",
            amount: 310,
            status: "pending",
            created_at: "2023-10-25T22:00:00Z",
            pay_at: "2023-10-26T22:00:00Z",
        },
        {
            id: "n234t56u",
            amount: 130,
            status: "processing",
            created_at: "2023-10-27T23:00:00Z",
            pay_at: "2023-10-28T23:00:00Z",
        },
        {
            id: "o345u67v",
            amount: 270,
            status: "success",
            created_at: "2023-10-29T00:00:00Z",
            pay_at: "2023-10-30T00:00:00Z",
        },
        // Add more data as needed
    ];
}

export default async function ConsoleOrderPage() {
    const data = await getData();

    return (
        <div className="container mx-auto">
            <DataTable columns={columns} data={data} />
        </div>
    );
}
