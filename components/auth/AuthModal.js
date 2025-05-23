'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

export default function AuthModal({ onClose }) {
    const [isLogin, setIsLogin] = useState(true);
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => setVisible(true), 10);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (isLogin) {
            if (email && password) {
                // Example admin check
                if (email === 'admin@example.com' && password === 'admin123') {
                    router.push('/admin');
                } else {
                    router.push('/dashboard');
                }
            } else {
                setError('Please enter email and password.');
            }
        } else {
            if (username && email && password) {
                router.push('/dashboard');
            } else {
                setError('Please fill all fields.');
            }
        }
    };

    return (
        <div className="fixed inset-0 z-100 h-screen flex items-start lg:items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-24 pt-24 lg:pt-0">
            <div
                className={`w-full max-w-[350px] bg-gray-900 text-white rounded-3xl shadow-2xl p-6 pt-1 py-4 mx-10 px-10 relative transform transition-all duration-300 ease-in-out
                ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {/* Close Button */}
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">
                        &times;
                    </button>
                </div>

                {/* Logo */}
                <div className="text-center mb-6">
                    <Image src="/img/logo.png" alt="Logo" width={80} height={80} className="mx-auto w-20 h-20 rounded-full" />
                    <h2 className="text-2xl font-bold mt-2">{isLogin ? 'Welcome Back' : 'Create an Account'}</h2>
                </div>

                {/* Error Message */}
                {error && <div className="text-red-400 text-center mb-2">{error}</div>}

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-white py-2 rounded-full font-semibold"
                    >
                        {isLogin ? 'Login' : 'Register'}
                    </button>
                </form>

                {/* Toggle Link */}
                <p className="mt-4 text-center text-sm text-gray-400">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                    <button
                        onClick={() => { setIsLogin(!isLogin); setError(''); }}
                        className="text-yellow-400 hover:underline font-medium"
                    >
                        {isLogin ? 'Register' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    )
}