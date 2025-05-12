'use client';

import TigerHeader from '@/app/components/TigerHeader';

export default function TigerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <TigerHeader />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
}