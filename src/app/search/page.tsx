"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import FoodItemCard from "../../components/FoodItemCard";

export default function Search() {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  // const apiKey = '4BoI0ldDafd7yJ3GgGl16j4AtSeUs9BPyFn6dn0d';
  // const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(searchQuery)}&api_key=${apiKey}`;

  async function fetchFoodData() {
    try {
      const response = await fetch(
        `https://api.nal.usda.gov/fdc/v1/foods/search?query=${searchQuery}&api_key=4BoI0ldDafd7yJ3GgGl16j4AtSeUs9BPyFn6dn0d`
      );
      const jsonData = await response.json();

      if (response.ok) {
        const foodData = jsonData.foods;
        setData(foodData);
      }
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching data from the API.");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchFoodData();
  }, []);

  return (
    <div>
      <h1> Search Query: {searchQuery} </h1>

      {isLoading ? (
        <div> Loading... </div>
      ) : (
        <ul>
          {data && data.length > 0 ? (
            data.map((currItem: any) => <FoodItemCard item={currItem} />)
          ) : (
            <div> No items found. </div>
          )}
        </ul>
      )}
    </div>
  );
}
