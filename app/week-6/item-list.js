
"use client"

import Item from "./item.js";
import { useState } from "react";
import itemData from "./items.json";


export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemData].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    let nameButtonStyle = "px-3 py-1 mx-4 rounded text-white font-medium bg-orange-500";
    let categoryButtonStyle = "px-3 py-1 mx-4 rounded text-white font-medium bg-orange-500"

    if (sortBy === "name") {
        nameButtonStyle = "px-3 py-1 mx-4 rounded text-white font-medium bg-orange-700";
    }

    if (sortBy === "category") {
        categoryButtonStyle = "px-3 py-1 mx-4 rounded text-white font-medium bg-orange-700"
    }
    return (
        <div>
            <div>
                <button onClick={() => {
                    setSortBy("name");
                }}
                    className={nameButtonStyle}>
                    Sort By Name
                </button>

                <button onClick={() => {
                    setSortBy("category");
                }}
                    className={categoryButtonStyle}>
                    Sort By Category
                </button>
            </div>

            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}