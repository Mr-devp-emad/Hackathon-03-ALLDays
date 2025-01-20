"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const LoginSignup = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleToggle = () => setIsLogin(!isLogin);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            console.log("Logging in with", email, password);
        } else {
            console.log("Signing up with", email, password);
        }
        router.push("/");
    };

    const handleGoogleLogin = () => {
        console.log("Google Login Clicked");
        // Add Google OAuth functionality here
    };

    const handleAppleLogin = () => {
        console.log("Apple Login Clicked");
        // Add Apple OAuth functionality here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 md:px-0">
            <h1 className="text-3xl font-bold mb-6 text-center">
                {isLogin ? "Login" : "Signup"}
            </h1>
            <form
                onSubmit={handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
                >
                    {isLogin ? "Login" : "Signup"}
                </button>
                <p className="mt-4 text-sm text-center">
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                    <button
                        type="button"
                        onClick={handleToggle}
                        className="text-blue-500 hover:underline"
                    >
                        {isLogin ? "Signup" : "Login"}
                    </button>
                </p>
            </form>

            {/* Divider */}
            <div className="flex items-center justify-center my-6 w-full max-w-md">
                <div className="w-full h-[1px] bg-gray-300"></div>
                <span className="px-3 text-sm text-gray-500">OR</span>
                <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            {/* OAuth Buttons */}
            <div className="flex flex-col gap-3 w-full max-w-md">
                <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            fill="#EA4335"
                            d="M24 9.5c3.38 0 6.26 1.16 8.6 3.07l6.9-6.9C34.8 2.2 29.74 0 24 0 14.72 0 6.7 5.4 3.27 13.26l8.96 6.94C14.16 14.1 18.8 9.5 24 9.5Z"
                        />
                        <path
                            fill="#4285F4"
                            d="M46.64 24.6c0-1.6-.14-3.12-.38-4.6H24v9.32h12.7c-.55 2.78-2.16 5.14-4.6 6.72l7.2 5.6c4.2-3.86 6.64-9.54 6.64-16.04Z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M13.26 26.34a8.9 8.9 0 0 1 0-5.08l-8.96-6.94C1.64 17.22 0 20.42 0 24c0 3.6 1.64 6.8 4.3 9.66l8.96-6.94Z"
                        />
                        <path
                            fill="#34A853"
                            d="M24 48c6.48 0 11.92-2.14 15.92-5.84l-7.2-5.6c-2.14 1.46-4.9 2.32-8.72 2.32-5.2 0-9.84-4.6-11.46-10.32l-8.96 6.94C6.7 42.6 14.72 48 24 48Z"
                        />
                        <path fill="none" d="M0 0h48v48H0z" />
                    </svg>
                    Login with Google
                </button>

                <button
                    onClick={handleAppleLogin}
                    className="flex items-center justify-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            fill="#fff"
                            d="M35.95 24.65c-.07-6.24 5.09-9.24 5.31-9.36-2.89-4.2-7.37-4.77-8.97-4.85-3.83-.39-7.46 2.26-9.4 2.26-1.95 0-4.91-2.2-8.07-2.14-4.15.07-7.97 2.42-10.13 6.15-4.31 7.45-1.09 18.44 3.07 24.46 2.03 3.03 4.47 6.4 7.66 6.28 3.05-.12 4.2-1.96 7.89-1.96s4.77 1.96 8.06 1.9c3.33-.06 5.44-3.08 7.42-6.1a26.34 26.34 0 0 0 3.3-6.75c-5.58-2.05-5.37-8.35-5.45-8.57ZM27.6 10.02c1.6-1.94 2.67-4.66 2.37-7.33-2.29.09-5.05 1.54-6.67 3.48-1.47 1.79-2.8 4.66-2.45 7.34 2.61.2 5.14-1.35 6.76-3.49Z"
                        />
                    </svg>
                    Login with Apple
                </button>
            </div>

            {/* Go Back to Home Button */}
            <button
                onClick={() => router.push("/")}
                className="mt-6 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
            >
                Go Back to Home
            </button>
        </div>
    );
};

export default LoginSignup;
