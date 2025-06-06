'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaTrash, FaEdit, FaEye, FaPlus, FaSearch, FaSun, FaMoon } from 'react-icons/fa';
import ViewModal from '@/components/modals/BooksModal/ViewModal';
import DeleteModal from '@/components/modals/BooksModal/DeleteModal';
import EditModal from '@/components/modals/BooksModal/EditModal';
import AddModal from '@/components/modals/BooksModal/AddModal';

const BooksTable = () => {
    const initialBooks = [
        {
            id: 1,
            title: 'Outliers',
            author: 'Malcolm Gladwell',
            category: 'Mindset',
            published: '2007',
            status: 'Available',
            image: '/img/book1.jpg',
        },
        {
            id: 2,
            title: 'Dont Believe Everything You Think',
            author: 'Joseph Nguyen',
            category: 'Personal Development',
            published: '1999',
            status: 'Issued',
            image: '/img/book2.jpg',
        },
        {
            id: 3,
            title: 'Dicide',
            author: 'Steve Mcclatchy',
            category: 'Self Help',
            published: '2002',
            status: 'Available',
            image: '/img/book3.jpg',
        },
        {
            id: 4,
            title: 'Mindset',
            author: 'Dr. Carol S. Dwek',
            category: 'Personal Development',
            published: '2011',
            status: 'Available',
            image: '/img/book4.jpg',
        },
        {
            id: 5,
            title: '7 Habbits of Highly Effective People',
            author: 'Franklin Covey',
            category: 'Personal Development',
            published: '2012',
            status: 'Reserved',
            image: '/img/book5.jpg',
        },
        {
            id: 6,
            title: 'Who Moved My Cheese?',
            author: 'Dr. Spencer Johnson',
            category: 'Programming',
            published: '2013',
            status: 'Available',
            image: '/img/book6.jpg',
        },
        {
            id: 7,
            title: 'Master',
            author: 'Robert Greenee',
            category: 'Self Help',
            published: '2020',
            status: 'Available',
            image: '/img/book7.jpg',
        },
        {
            id: 8,
            title: 'Power',
            author: 'Robert Greene',
            category: 'Self Help',
            published: '2022',
            status: 'Available',
            image: '/img/book8.jpg',
        },
        {
            id: 9,
            title: 'Atomic Habits',
            author: 'James Clear',
            category: 'Self Help',
            published: '2020',
            status: 'Available',
            image: '/img/book9.jpg',
        },
        {
            id: 10,
            title: 'Good Vibes Good Life',
            author: 'Vex King',
            category: 'Positive Psychology',
            published: '2013',
            status: 'Available',
            image: '/img/book10.jpg',
        },
        {
            id: 11,
            title: 'The Subtle Art of not Giving a Fuck',
            author: 'Marijn Haverbeke',
            category: 'Personal Development',
            published: '2024',
            status: 'Available',
            image: '/img/book11.jpg',
        },
        {
            id: 12,
            title: 'True Psychology',
            author: 'Galen E. Cole',
            category: 'Psychology',
            published: '2018',
            status: 'Available',
            image: '/img/book12.jpg',
        },
        {
            id: 13,
            title: 'Vision of Tomorrow',
            author: 'Edgar Allan Poe',
            category: 'Fiction',
            published: '1990',
            status: 'Available',
            image: '/img/book13.jpg',
        },
        {
            id: 14,
            title: 'Open your mind',
            author: 'Yuval Harari',
            category: 'Psychology',
            published: '1998',
            status: 'Available',
            image: '/img/book14.jpg',
        },
    ];

    const [allBooks, setAllBooks] = useState(initialBooks);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentBooks = allBooks.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(allBooks.length / rowsPerPage);
    const [darkMode, setDarkMode] = useState(true);

    const [addModalOpen, setAddModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);


    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const handleAddBook = () => {
        setAddModalOpen(true);
    };

    const handleEditBook = (book) => {
        setSelectedBook(book);
        setEditModalOpen(true);
    };

    const handleViewBook = (book) => {
        setSelectedBook(book);
        setViewModalOpen(true);
    };

    const handleDeleteBook = (bookId) => {
        setAllBooks((prevBooks) => {
            const updatedBooks = prevBooks.filter((book) => book.id !== bookId);
            const newTotalPages = Math.ceil(updatedBooks.length / rowsPerPage);
            if (currentPage > newTotalPages) {
                setCurrentPage(newTotalPages > 0 ? newTotalPages : 1);
            }
            return updatedBooks;
        });
        setDeleteModalOpen(false);
    };

    const openDeleteModal = (book) => {
        setSelectedBook(book);
        setDeleteModalOpen(true);
    };

    const handleSaveBook = (newBook) => {
        if (selectedBook) {
            // Edit existing book
            setAllBooks((prevBooks) =>
                prevBooks.map((book) =>
                    book.id === selectedBook.id ? { ...book, ...newBook } : book
                )
            );
        } else {
            // Add new book
            setAllBooks((prevBooks) => [
                ...prevBooks,
                { id: Date.now(), ...newBook }, // Use a unique ID
            ]);
        }
    };

    return (
        <div className={`py-[40px] px-[30px] h-screen pb-[50px] ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'} mr-[14px]`}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold">BOOKS</h2>
                <div className="flex items-center gap-4">
                    <button onClick={toggleDarkMode} className="text-2xl">
                        {darkMode ? <FaSun className="text-yellow-500 text-xl" /> : <FaMoon className="text-gray-600 text-xl" />}
                    </button>
                    <div className="hidden md:flex items-center w-full max-w-md mx-2 relative">
                        <input
                            type="text"
                            placeholder="Search books..."
                            className={`w-full px-3 py-2 pr-10 rounded ${darkMode ? 'bg-gray-700 border-gray-500 text-white' : 'bg-gray-200 border-gray-300 text-black'} focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        />
                        <button className="absolute right-3 text-gray-400 hover:text-blue-500">
                            <FaSearch className="h-5 w-5" />
                        </button>
                    </div>
                    <button
                        onClick={handleAddBook}
                        className="flex items-center gap-2 px-4 py-[10px] mr-[65px] w-[200px] text-sm bg-blue-600 hover:bg-blue-500 text-white rounded"
                    >
                        <FaPlus /> Add Book
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto pr-16">
                <table className={`min-w-full ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} rounded-lg`}>
                    <thead>
                        <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-300'} text-left`}>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Book</th>
                            <th className="px-6 py-3">Title</th>
                            <th className="px-6 py-3">Author</th>
                            <th className="px-6 py-3">Category</th>
                            <th className="px-6 py-3">Published</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentBooks.map((book) => (
                            <tr
                                key={book.id}
                                className={`border-b ${darkMode ? 'border-gray-700 hover:bg-gray-700/35' : 'border-gray-300 hover:bg-gray-200'} transition-colors`}
                            >
                                <td className="px-6 py-4">{book.id}</td>
                                <td className="px-6 py-4">
                                    <Image
                                        src={book.image}
                                        alt={book.title}
                                        height={48}
                                        width={36}
                                        className="h-12 w-9 object-cover rounded"
                                    />
                                </td>
                                <td className="px-6 py-4">{book.title}</td>
                                <td className="px-6 py-4">{book.author}</td>
                                <td className="px-6 py-4">{book.category}</td>
                                <td className="px-6 py-4">{book.published}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`h-2.5 w-2.5 rounded-full ${book.status === 'Available' ? 'bg-green-500' : 'bg-red-500'
                                                }`}
                                        ></span>
                                        <span>{book.status}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <div className="flex justify-center gap-4 text-white">
                                        <button onClick={() => handleViewBook(book)} className="text-blue-500">
                                            <FaEye size={16} />
                                        </button>
                                        <button onClick={() => handleEditBook(book)} className="text-yellow-500">
                                            <FaEdit size={16} />
                                        </button>
                                        <button onClick={() => openDeleteModal(book)} className="text-red-500 hover:text-red-400">
                                            <FaTrash size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1 text-sm">
                    <div className="flex gap-2">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} disabled:opacity-50`}
                        >
                            Prev
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-600 text-white' : darkMode ? 'bg-gray-600 text-gray-200' : 'bg-gray-300 text-black'}`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`px-3 py-1 rounded ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-black'} disabled:opacity-50`}
                        >
                            Next
                        </button>
                    </div>

                    <div className={`text-center w-full sm:w-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Showing {indexOfFirstRow + 1}–{Math.min(indexOfLastRow, allBooks.length)} of {allBooks.length} books
                    </div>
                </div>
            </div>
            <AddModal
                isOpen={addModalOpen}
                onClose={() => setAddModalOpen(false)}
                onSave={handleSaveBook}
            />

            <ViewModal
                isOpen={viewModalOpen}
                onClose={() => setViewModalOpen(false)}
                book={selectedBook}
            />

            <EditModal
                isOpen={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                onSave={handleSaveBook}
                book={selectedBook}
            />

            <DeleteModal
                isOpen={deleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onDelete={handleDeleteBook}
                book={selectedBook}
            />
        </div>
    );
};

export default BooksTable;