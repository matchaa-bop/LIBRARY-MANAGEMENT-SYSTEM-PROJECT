'use client';

import { useState } from 'react';

export default function AdminSettingsPage() {
    const [name, setName] = useState('Admin');
    const [email, setEmail] = useState('admin@example.com');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would call your API to update settings
        setMessage('Settings saved successfully!');
        setPassword('');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white px-4">
            <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
                <div>
                    <label className="block mb-2 text-sm font-semibold">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold">New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Leave blank to keep current password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-500 hover:to-orange-700 text-white py-2 rounded-full font-semibold"
                >
                    Save Settings
                </button>
                {message && <div className="text-green-400 text-center mt-2">{message}</div>}
            </form>
        </div>
    );
}