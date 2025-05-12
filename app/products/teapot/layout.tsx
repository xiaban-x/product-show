'use client';

import TeapotHeader from '@/app/components/TeapotHeader';

export default function TeapotLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-amber-50/30">
            <TeapotHeader />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
}