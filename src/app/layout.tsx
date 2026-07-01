import "./globals.css";

import {Header} from '../components/header'
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home - Next JS!',
    description: 'Treinando Next JS!',
    openGraph:{
        title: 'Treinando Next JS!',
        description: 'Estou adorando Next JS e sua praticidade !',
        images: ['public/setup.webp'],
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
        }
    }
}

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="pt-BR">
        <body className={`antialiased`}
        >
            <Header />

            {children}
        </body>
        </html>
    );
}
