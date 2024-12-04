"use client";

import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItem] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const { user } = useUserAuth();

  // An event handler function that adds a new item to items
  const handleAddItem = (item) => {
    setItem([...items, item]);
  };

  const handleItemSelect = (name) => {
    const cleanedName = name
      .split(",")[0]
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="flex">
      {user ? (
        <div className="flex">
          <div className="w-2/3">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="w-1/3">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      ) : (
        <div>
          <p>You must be logged in to view this page.</p>
          <Link href="/week-9/">Click here to return to the Sign In page</Link>
        </div>
      )}
    </main>
  );
}
