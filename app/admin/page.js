'use client';

import { useEffect, useState } from 'react';

export default function DashboardPage() {
    const [stats, setStats] = useState({
        totalBooks: 520,
        newBooksThisMonth: 20,
        totalMembers: 42,
        newMembersThisWeek: 5,
        booksIssued: 110,
        overdueReturns: 47,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            setLoading(true);
            try {
                const res = await fetch('/api/admin/dashboard-stats');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setStats(data);
            } catch (err) {
                setError('Failed to load updated stats');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    return (
        <div className="py-10 px-4 min-h-screen bg-gray-900">
            <div className="text-white text-3xl font-bold mb-10 pl-2 tracking-tight text-center">
                📊 Dashboard
            </div>

            {/* {error && <div className="text-red-400 pl-6 mb-4">{error}</div>} */}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-800/90 border border-yellow-500/20 p-8 rounded-2xl shadow flex flex-col items-center">
                    <p className="text-sm text-yellow-400 mb-1">Total Books</p>
                    <h2 className="text-4xl font-extrabold text-white mb-2">{stats.totalBooks}</h2>
                    <p className="text-yellow-300 text-xs">+{stats.newBooksThisMonth} new this month</p>
                </div>

                <div className="bg-gray-800/90 border border-green-500/20 p-8 rounded-2xl shadow flex flex-col items-center">
                    <p className="text-sm text-green-400 mb-1">Total Members</p>
                    <h2 className="text-4xl font-extrabold text-white mb-2">{stats.totalMembers}</h2>
                    <p className="text-green-300 text-xs">+{stats.newMembersThisWeek} this week</p>
                </div>

                <div className="bg-gray-800/90 border border-blue-500/20 p-8 rounded-2xl shadow flex flex-col items-center">
                    <p className="text-sm text-blue-400 mb-1">Books Issued</p>
                    <h2 className="text-4xl font-extrabold text-white mb-2">{stats.booksIssued}</h2>
                    <p className="text-blue-300 text-xs">Updated today</p>
                </div>

                <div className="bg-gray-800/90 border border-red-500/20 p-8 rounded-2xl shadow flex flex-col items-center">
                    <p className="text-sm text-red-400 mb-1">Overdue Returns</p>
                    <h2 className="text-4xl font-extrabold text-white mb-2">{stats.overdueReturns}</h2>
                    <p className="text-red-300 text-xs">Action needed</p>
                </div>
            </div>
        </div>
    );
}