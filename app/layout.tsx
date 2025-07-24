import {type Metadata} from 'next'
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import {Inter, Space_Grotesk} from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const spaceGrotesk = Space_Grotesk({
    variable: '--font-spaceGrotesk',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
})
export const metadata: Metadata = {
    title: 'DevFlow',
    description: 'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
    icons: {
        icon: '/assets/images/site-logo.svg',
    }
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <ClerkProvider appearance={{
            elements: {
                formButtonPrimary: 'primary-gradient',
                footerActionLink: 'primary-text-gradient hover:text-primary-500',
            }
        }}>
            <html lang="en">
            <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
            <h1 className="h1-bold">Some text</h1>
            {children}
            </body>
            </html>
        </ClerkProvider>
    )
}