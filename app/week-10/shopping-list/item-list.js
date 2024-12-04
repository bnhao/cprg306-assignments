"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  let nameButtonStyle =
    "mt-10 px-3 py-1 mx-4 rounded text-white font-medium bg-orange-500";
  let categoryButtonStyle =
    "mt-10 px-3 py-1 mx-4 rounded text-white font-medium bg-orange-500";

  if (sortBy === "name") {
    nameButtonStyle =
      "px-3 py-1 mx-4 rounded text-white font-medium bg-orange-700";
  }

  if (sortBy === "category") {
    categoryButtonStyle =
      "px-3 py-1 mx-4 rounded text-white font-medium bg-orange-700";
  }

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setSortBy("name");
          }}
          className={nameButtonStyle}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setSortBy("category");
          }}
          className={categoryButtonStyle}
        >
          Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
      </ul>
    </div>
  );
}
