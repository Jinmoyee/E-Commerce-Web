import React from "react";
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <div className="p-5 max-w-lg mx-auto">
            <h1 className="text-center text-3xl font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-5">
                <input className="text-lg px-2 py-1 border-2 rounded-md" type="text" placeholder="User name" />
                <input className="text-lg px-2 py-1 border-2 rounded-md" type="email" placeholder="Email" />
                <input className="text-lg px-2 py-1 border-2 rounded-md" type="password" placeholder="Enter your password" />
                <button className="bg-gray-700 text-white py-3 rounded-md hover:opacity-90 disabled:opacity-70">SIGN UP</button>
            </form>
            <div className="flex gap-1 mt-2">
                <p>Have an account?</p>
                <Link to={'/signIn'} className="text-blue-600">Sign In</Link>
            </div>
        </div>
    )
}