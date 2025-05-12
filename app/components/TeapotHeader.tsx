'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TeapotHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/products/teapot" className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-amber-700">云雾飘渺</span>
                </Link>

                {/* 桌面导航 */}
                <nav className="hidden md:flex space-x-8">
                    <Link href="/products/teapot" className="text-gray-700 hover:text-amber-700 transition-colors">
                        首页
                    </Link>
                    <Link href="/products/teapot/features" className="text-gray-700 hover:text-amber-700 transition-colors">
                        产品特点
                    </Link>
                    <Link href="/products/teapot/gallery" className="text-gray-700 hover:text-amber-700 transition-colors">
                        产品展示
                    </Link>
                    <Link href="/products/teapot/contact" className="text-gray-700 hover:text-amber-700 transition-colors">
                        联系我们
                    </Link>
                </nav>

                {/* 移动端菜单按钮 */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* 移动端菜单 */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                        <Link
                            href="/products/teapot"
                            className="text-gray-700 hover:text-amber-700 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            首页
                        </Link>
                        <Link
                            href="/products/teapot/features"
                            className="text-gray-700 hover:text-amber-700 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            产品特点
                        </Link>
                        <Link
                            href="/products/teapot/gallery"
                            className="text-gray-700 hover:text-amber-700 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            产品展示
                        </Link>
                        <Link
                            href="/products/teapot/contact"
                            className="text-gray-700 hover:text-amber-700 transition-colors py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            联系我们
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}