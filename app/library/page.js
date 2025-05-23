'use client';

import Image from 'next/image';
import Carousel from '../../components/Carousel/carousel';

export default function LibraryPage() {
    const Trending = [
        {
            id: 1,
            title: 'Outliers',
            cover: '/img/book1.jpg',
            status: 'Available',
        },
        {
            id: 2,
            title: 'Dont Belive Everything You Think',
            cover: '/img/book2.jpg',
            status: 'Coming Soon',
        },
        {
            id: 3,
            title: 'Decade',
            cover: '/img/book3.jpg',
            status: 'Preview Only',
        },
        {
            id: 4,
            title: 'The Mindset',
            cover: '/img/book4.jpg',
            status: 'Available',
        },
        {
            id: 5,
            title: '7 Habits of Highly Effective People',
            cover: '/img/book5.jpg',
            status: 'Not in Library',
        },
        {
            id: 6,
            title: 'Who moved my Cheese?',
            cover: '/img/book6.jpg',
            status: 'Checked Out',
        },
        {
            id: 7,
            title: 'Mastery',
            cover: '/img/book7.jpg',
            status: 'Checked Out',
        },
        {
            id: 8,
            title: 'Power',
            cover: '/img/book8.jpg',
            status: 'Checked Out',
        },
        {
            id: 9,
            title: 'Atomic Habits',
            cover: '/img/book9.jpg',
            status: 'Checked Out',
        },
    ];
    const Thrillers = [
        {
            title: 'Good Vibes, Good Life',
            cover: '/img/book10.jpg',
            status: 'Available',
        },
        {
            title: 'The Subtle Art of not giving a Fuck',
            cover: '/img/book11.jpg',
            status: 'Checked Out',
        },
        {
            title: 'True Psychology',
            cover: '/img/book12.jpg',
            status: 'Preview Only',
        },
        {
            title: 'Visions of Tomorrow',
            cover: '/img/book13.jpg',
            status: 'Preview Only',
        },
        {
            title: 'Open your Mind',
            cover: '/img/book14.jpg',
            status: 'Not in Library',
        },
        {
            title: 'Outliers',
            cover: '/img/book1.jpg',
            status: 'Checked Out',
        },
        {
            title: 'Outliers',
            cover: '/img/book1.jpg',
            status: 'Checked Out',
        },
        {
            title: 'True Psychology',
            cover: '/img/book12.jpg',
            status: 'Checked Out',
        },
        {
            title: 'Visions of Tomorrow',
            cover: '/img/book13.jpg',
            status: 'Checked Out',
        },
    ];
    // const Thrillers = [
    //     {
    //         title: 'Control Your Mind',
    //         cover: 'https://covers.openlibrary.org/b/id/10523353-L.jpg',
    //         status: 'Not in Library',
    //     }, 
    // ];

    return (
        <>
            <Carousel  title="Trending" books={Trending} />;
            <Carousel title="Thrillers" books={Thrillers} />;
        </>
    );
}