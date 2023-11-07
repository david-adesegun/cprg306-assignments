"use client"

import { useUserAuth } from "../_utils/auth-context";

import ShoppingList from "@/app/week2/page";
import ItemList from "./item-list";

const Page = () => {
    const { user } = useUserAuth();

    if (!user) {
        return <ShoppingList />;
    }
    return (
        <main className="mt-8">
            <ItemList />
        </main>
    );
};

export default Page;
