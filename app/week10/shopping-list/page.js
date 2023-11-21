"use client"
import { useUserAuth } from "../_utils/auth-context";
import ShoppingList from "@/app/week2/page";
import ItemList from "./item-list";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect, useState } from "react";

const Page = () => {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);

    const loadItems = async () => {
        try {
            const shoppingItemsList = await getItems(user.id);
            setItems(shoppingItemsList);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            loadItems();
        }
    }, [user]);

    const handleAddItem = async item => {
        try {
            const newItemId = await addItem(user.uid, item);
            setItems(prevItems => [
                ...prevItems,
                {
                    id: newItemId,
                    data: item,
                }
            ])
        } catch (error) {
            console.log(error);
        }
    };


    if (!user) {
        return <ShoppingList />;
    }

    return (
        <main className="mt-8">
            <ItemList items={items} onAddItem={handleAddItem} />
        </main>
    );
};

export default Page;
