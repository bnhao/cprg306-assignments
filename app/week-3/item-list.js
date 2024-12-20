import Item from "./item.js";


export default function ItemList() {

    const item1 = {
        name: "milk, 4 L 🥛",
        quantity: 1,
        category: "dairy",
    };

    const item2 = {
        name: "bread 🍞",
        quantity: 2,
        category: "bakery",
    };

    const item3 = {
        name: "eggs, dozen 🥚",
        quantity: 2,
        category: "dairy",
    };

    const item4 = {
        name: "bananas 🍌",
        quantity: 6,
        category: "produce",
    };

    const item5 = {
        name: "broccoli 🥦",
        quantity: 3,
        category: "produce",
    };

    const item6 = {
        name: "chicken breasts, 1 kg 🍗",
        quantity: 1,
        category: "meat",
    };

    const item7 = {
        name: "pasta sauce 🍝",
        quantity: 3,
        category: "canned goods",
    };

    const item8 = {
        name: "spaghetti, 454 g 🍝",
        quantity: 2,
        category: "dry goods",
    };

    const item9 = {
        name: "toilet paper, 12 pack 🧻",
        quantity: 1,
        category: "household",
    };

    const item10 = {
        name: "paper towels, 6 pack",
        quantity: 1,
        category: "household",
    };

    const item11 = {
        name: "dish soap 🍽️",
        quantity: 1,
        category: "household",
    };

    const item12 = {
        name: "hand soap 🧼",
        quantity: 4,
        category: "household",
    };


    return (
        <div className="grid grid-cols-1 gap-4">
            <Item ItemObj={item1} />
            <Item ItemObj={item2} />
            <Item ItemObj={item3} />
            <Item ItemObj={item4} />
            <Item ItemObj={item5} />
            <Item ItemObj={item6} />
            <Item ItemObj={item7} />
            <Item ItemObj={item8} />
            <Item ItemObj={item9} />
            <Item ItemObj={item10} />
            <Item ItemObj={item11} />
            <Item ItemObj={item12} />
        </div>
    )
}