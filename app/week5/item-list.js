"use client"
import { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const handleSortByName = () => {
        setSortBy("name");
    };

    const handleSortByCategory = () => {
        setSortBy("category");
    };

    return (
        <div>
            <div className="ml-4 text-white">
                <span>Sort By: </span>
                <button
                    onClick={handleSortByName}
                    className={`${
                        sortBy === 'name' ? 'bg-red-500' : 'bg-teal-600'
                    } mr-6 mb-8 mt-8 w-28 h-8 rounded-sm ml-4`}>Name
                </button>

                <button
                    onClick={handleSortByCategory}
                    className={`${
                        sortBy === 'category' ? 'bg-red-500' : 'bg-teal-600'
                    } w-28 h-8 rounded-sm`}>Category
                </button>
            </div>

            <div>
                {sortedItems.map(sortedItem =>
                    <Item
                        key={sortedItem.id}
                        name={sortedItem.name}
                        quantity={sortedItem.quantity}
                        category={sortedItem.category}
                    />
                )}
            </div>
        </div>
    )
}

export default ItemList;
