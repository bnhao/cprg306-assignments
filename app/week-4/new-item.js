"use client"

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const IncreaseQuantity = () => {
        let currentQuantity = quantity;
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const DecreaseQuantity = () => {
        let currentQuantity = quantity;
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <h2>Quantity Manager</h2>
            <p>Quantity: {quantity}</p>
            <button onClick={IncreaseQuantity}>Increase! </button> <br />
            <button onClick={DecreaseQuantity}>Decrease... </button>

        </div>
    );
}

