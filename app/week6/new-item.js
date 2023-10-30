"use client";
import { useState } from "react";

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = e => {
        e.preventDefault();

        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);
        onAddItem(item);

        setName('');
        setQuantity(1);
        setCategory('Produce');
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mt-8 p-6 bg-teal-800 rounded-lg shadow-lg">
            <div className="mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    placeholder="Item name"
                    className="w-full px-3 py-2 border rounded-md">
                </input>
            </div>

            <div className="mb-4">
                <input
                    type="number"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={e => setQuantity(Number(e.target.value))}
                    required
                    className="w-full px-3 py-2 border rounded-md">
                </input>
            </div>

            <div className="mb-4">
                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md">
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="text-center">
                <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md w-full">Add</button>
            </div>
        </form>
    );
}

export default NewItem;
