"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, []); // Re-fetch meals when ingredient change

  return (
    <div>
      <header>
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <Image
                src={meal.strMealThumb}
                alt={meal.strMeal}
                height={100}
                width={100}
              />
              <p>{meal.strMeal} </p>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
