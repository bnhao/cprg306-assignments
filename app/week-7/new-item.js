"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemName, setItemName] = useState("");
    const [itemCategory, setItemCategory] = useState("produce");

    function increaseQuantity() {
        if (itemQuantity < 20) {
            setItemQuantity(itemQuantity + 1);
        }
    }

    function decreaseQuantity() {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
        }
    }

    const handleItemName = (event) => setItemName(event.target.value);
    const handleCategoryChange = (event) => setItemCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const itemObject = {
            name: itemName,
            quantity: itemQuantity,
            category: itemCategory,
        };

        onAddItem(itemObject);

        setItemCategory("produce");
        setItemQuantity(1);
        setItemName("");
    };

    const buttonStyles = "bg-blue-500 hover:bg-blue-600 text-white rounded px-2 py-1 mx-1";

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded mb-6">
            <div className="flex items-center mb-4">
                <input
                    type="text"
                    value={itemName}
                    onChange={handleItemName}
                    placeholder="Item name"
                    className="flex-1 text-black px-2 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center mb-4 bg-gray-700 rounded p-2">
                <span className="text-white mr-2">Quantity:</span>
                <button type="button" onClick={decreaseQuantity} className={buttonStyles}>-</button>
                <span className="mx-2">{itemQuantity}</span>
                <button type="button" onClick={increaseQuantity} className={buttonStyles}>+</button>
            </div>
            <div className="flex items-center mb-4">
                <select
                    value={itemCategory}
                    onChange={handleCategoryChange}
                    className="text-black px-2 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 shadow-none"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="bakery">Bakery</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded">+</button>
        </form>
    );
}
