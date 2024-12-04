"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  let currentQuantity = quantity;

  const increment = () => {
    if (currentQuantity < 20) {
      setQuantity(currentQuantity + 1);
    }
  };

  const decrement = () => {
    if (currentQuantity > 1) {
      setQuantity(currentQuantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = Math.floor(Math.random() * 1000000);
    const newItem = { id: newId, name, quantity, category };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("");
  };

  const buttonBaseStyle = "px-3 py-1 rounded text-white font-medium";
  const decrementButtonStyle =
    quantity > 1 ? "bg-red-500" : "bg-gray-400 cursor-not-allowed";
  const incrementButtonStyle =
    quantity < 20 ? "bg-blue-500" : "bg-gray-400 cursor-not-allowed";
  const submitButtonStyle = "bg-blue-500 hover:bg-blue-600";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-slate-900 p-6 rounded-lg shadow-lg space-y-4 w-full mx-4 max-w-sm"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Item name"
        className="w-full px-3 py-2 border rounded-lg text-black focus:ring-2 focus:ring-orange-400"
      />
      <div className="flex w-full space-x-2">
        <div className="flex items-center space-x-2 bg-white p-2 rounded-lg flex-grow">
          <p className="text-black">{currentQuantity}</p>
          <button
            type="button"
            className={`${buttonBaseStyle} ${decrementButtonStyle}`}
            onClick={decrement}
          >
            -
          </button>
          <button
            type="button"
            className={`${buttonBaseStyle} ${incrementButtonStyle}`}
            onClick={increment}
          >
            +
          </button>
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option disabled value="">
            Category
          </option>
          <option selected value="produce">
            Produce
          </option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen-goods">Frozen Goods</option>
          <option value="canned-goods">Canned Goods</option>
          <option value="dry-goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="w-full max-w-sm">
        <button
          type="submit"
          className={`w-full ${buttonBaseStyle} ${submitButtonStyle}`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
