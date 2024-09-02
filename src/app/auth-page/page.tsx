"use client";

import { useState } from "react";
import SignInForm from "@/components/SignIn";
import SignUpForm from "@/components/SignUp";

function AuthPage() {
    const [showSignIn, setShowSignIn] = useState(false);

    return (
        <div className="flex flex-col md:flex-row min-h-screen md:items-center md:justify-evenly bg-gray-100 p-4">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full md:w-1/3">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-center text-gray-700">
                    {showSignIn ? "Sign In" : "Don't have an account yet?"}
                </h2>
                {showSignIn ? (
                    <SignInForm />
                ) : (
                    <SignUpForm />
                )}
                <div className="flex justify-center mt-4">
                    <button 
                        onClick={() => setShowSignIn(!showSignIn)} 
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        {showSignIn ? "Back to Sign Up" : "Already have an account? Sign In"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AuthPage;
