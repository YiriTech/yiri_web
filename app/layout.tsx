"use client"
import { useEffect } from 'react';
import "./globals.css";

export default function RootLayout({ children }:Readonly<{
  children: React.ReactNode;
}>) {
    useEffect(() => {
        // require('bootstrap/dist/js/bootstrap.min.js');
    }, []);

    return (
        <html lang="en">
            <head>
                <link rel='icon' type='image/png' href='/favicon.ico' />
            </head>
            <body className='font-medium tracking-wider'>
                {children}
        </body>
        </html>
    );
}

