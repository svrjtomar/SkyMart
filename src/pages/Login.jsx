import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'


const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const user = existingUsers.find(u => u.email === email && u.password === password);

        if (!user) {
            setError('Invalid Email or Password')
            return;
        }

        const sessionData = {id: user.id, name: user.name, email: user.email};
        localStorage.setItem('activeSessionData', JSON.stringify(sessionData));

        navigate('/');

    }
    return (
        <div className='min-h-screen bg-[#111111] text-white flex flex-col'>
            <Navbar />
            <main className="grow flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md bg-[#1a1a1a] p-8 rounded-2xl border border-[#333333] shadow-xl">
                    <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                    <p className="text-gray-400 mb-8">Sign in to your SkyMart account.</p>
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-lg mb-6 text-sm">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="flex flex-col gap-5">
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-[#111111] border border-[#333333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500 transition-colors"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-[#111111] border border-[#333333] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-lime-500 transition-colors"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-lime-400 text-black font-bold text-lg py-3 rounded-xl hover:bg-lime-500 transition-colors mt-2 cursor-pointer "
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="text-center text-gray-400 text-sm mt-8">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-lime-500 font-bold hover:underline">
                            Sign up
                        </Link>
                    </p>
                </div>



            </main>
            <Footer />
        </div>
    )
}

export default Login