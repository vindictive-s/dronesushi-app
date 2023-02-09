import React from "react";
import { useEffect } from "react";
import "./Filter.css";

const Filter = ({
  setActiveCategory,
  activeCategory,
  setFiltered,
  category,
}) => {
  useEffect(() => {
    if (activeCategory === "All") {
      setFiltered(category);
      return;
    }
    const filtered = category.filter((item) =>
      item.id.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <div className="filter-container">
      <button
        className={activeCategory === "All" ? "active" : ""}
        onClick={() => setActiveCategory("All")}
      >
        All
      </button>
      <button
        className={activeCategory === "Roll" ? "active" : ""}
        onClick={() => setActiveCategory("Roll")}
      >
        Sushi Rolls
      </button>
      <button
        className={activeCategory === "Set" ? "active" : ""}
        onClick={() => setActiveCategory("Set")}
      >
        Sushi Sets
      </button>
      <button
        className={activeCategory === "Vegetarian" ? "active" : ""}
        onClick={() => setActiveCategory("Vegetarian")}
      >
        Vegetarian
      </button>
      <button
        className={activeCategory === "Dessert" ? "active" : ""}
        onClick={() => setActiveCategory("Dessert")}
      >
        Desserts
      </button>
      <button
        className={activeCategory === "Beverage" ? "active" : ""}
        onClick={() => setActiveCategory("Beverage")}
      >
        Beverages
      </button>
    </div>
  );
};

export default Filter;
