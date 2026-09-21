import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Sanjeev Kesavan — AI × Cloud × Full Stack × DevOps', description: 'Portfolio of Sanjeev Kesavan.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }