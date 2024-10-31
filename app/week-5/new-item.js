"use client";

import { useState } from "react";

export default function NewItem() {
    const [itemQuantity, setItemQuantity] = useState(0);
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

        alert(`
            Name: ${itemObject.name} |
            Quantity: ${itemObject.quantity} |
            Category: ${itemObject.category}
        `);

        // Reset the form fields
        setItemCategory("produce");
        setItemQuantity(1);
        setItemName("");
    };

    const buttonStyles = "bg-blue-400 hover:bg-blue-700 active:bg-yellow-300 text-white rounded py-2 px-4 mt-5";

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-blue-100">
            <h2 className="text-black">Item List Manager</h2>
            <div className="mb-3">
                <label className="text-black inline-block w-40">Item Name:</label>
                <input
                    onChange={handleItemName}
                    value={itemName}
                    type="text"
                    placeholder="Milk"
                    className="text-black px-2 py-1 rounded border border-blue-500 focus:bg-orange-100"
                />
            </div>
            <div className="mb-3">
                <label className="text-black inline-block w-40">Category:</label>
                <select
                    onChange={handleCategoryChange}
                    value={itemCategory}
                    className="text-black px-2 py-1 rounded border border-blue-500 focus:bg-orange-100"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="meat">Meat</option>
                    <option value="bakery">Bakery</option>
                </select>
            </div>
            <div className="mb-3">
                <p className="text-black">Quantity: {itemQuantity}</p>
                <button type="button" onClick={increaseQuantity} className={buttonStyles}>Increase!</button>
                <button type="button" onClick={decreaseQuantity} className={buttonStyles}>Decrease...</button>
            </div>
        </form>
    );
}
