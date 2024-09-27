import ItemList from "./item-list";
import Item from "./item"

export default function Page() {

    let item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    }

    return (
        <main>
            <h1>Shopping List</h1>
            <Item ItemObj={item1} />
            <ItemList />
        </main>
    )
}