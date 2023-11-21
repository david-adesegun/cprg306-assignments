"use client";
import Link from "next/link"

import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        await gitHubSignIn();
    };

    const handleSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">Shopping List App</h1>
            {!user && <button onClick={handleSignIn} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600">Sign in with GitHub</button>}
            {user && (
                <div className="text-center">
                    <p className="text-lg my-4">You are signed in as {user.email}</p>
                    <Link href="/week7" className=" hover:text-blue-800">Continue to your Shopping List</Link><br></br>
                    <button onClick={handleSignOut} className="bg-red-500 text-white px-4 py-2 rounded mt-4 cursor-pointer hover:bg-red-600">Sign out</button>
                </div>
            )}
        </div>
    );
};

export default Page;
