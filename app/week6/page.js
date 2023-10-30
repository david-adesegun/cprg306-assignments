"use client"
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

const Page = () => {
    const [items, setItemsData] = useState(itemsData)

    const handleAddItem = item => {
        setItemsData(prevItems => {
            return [...prevItems, item]
        });
    };

    return (
        <main className="bg-teal-800">
            <h1 className="text-3xl font-bold text-white ml-16">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
};

export default Page;
