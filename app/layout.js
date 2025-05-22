import React from 'react';
import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
        {/* Tailwind CSS CDN script must be here */}
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>

      <body className="antialiased w-full">
        {children}
      </body>
    </html>
  );
}
