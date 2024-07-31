import React from "react";

const categories = ["All", "Animal", "Art", "Human", "Nature"];
function CategoryButtons({ onSelectCategory }) {
    return (
        <div className="categoryButtons">
        {categories.map((category) => (
            <button
            key={category}
            onClick={() => onSelectCategory(category)}
            >
            {category}
            </button>
        ))}
        </div>
    );
}

export default CategoryButtons;
