import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    console.log(formData)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const data = await fetch("/api/auth/signup", {
                method: 'post',
                body: JSON.stringify(formData),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const result = await data.json()
            if (result.success === false) {
                setError(result.message)
                setLoading(false)
            } else {
                setLoading(false)
                setError(null)
                navigate('/signIn')
            }
            console.log(result)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    return (
        <div className="p-5 max-w-lg mx-auto">
            <h1 className="text-center text-3xl font-semibold my-7">Sign Up</h1>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input className="text-lg px-2 py-1 border-2 rounded-md" id="username" type="text" placeholder="User name" onChange={handleChange} />
                <input className="text-lg px-2 py-1 border-2 rounded-md" id="email" type="email" placeholder="Email" onChange={handleChange} />
                <input className="text-lg px-2 py-1 border-2 rounded-md" id="password" type="password" placeholder="Enter your password" onChange={handleChange} />
                <button disabled={loading} className="bg-gray-700 text-white py-3 rounded-md hover:opacity-90 disabled:opacity-70">{loading ? "LOADING..." : "SIGN UP"}</button>
            </form>
            <div className="flex gap-1 mt-2">
                <p>Have an account?</p>
                <Link to={'/signIn'} className="text-blue-600">Sign In</Link>
            </div>
            {error && <p className="text-red-500 mt-5">{error}</p>}

        </div>
    )
}