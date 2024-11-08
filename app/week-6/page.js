import ItemList from "./item-list.js";

export default function Page() {

    return (
        <main className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold mb-6">Shopping List</h1>
            <ItemList />
        </main>
    )
}