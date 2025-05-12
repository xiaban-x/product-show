'use client';

import Link from 'next/link';

export default function TeapotFeaturesPage() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] pt-20">
            {/* 产品特点 */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-12">产品特点</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">超音波提香技术</h3>
                            <p className="text-gray-600">采用先进超音波技术，将茶汤打成纳米级别，使茶汤水分子降低至6-8个，极大提升茶香释放效率，带来前所未有的浓郁香气体验。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">云雾缭绕效果</h3>
                            <p className="text-gray-600">独特的设计让茶水倒入时产生云雾飘渺效果，结合光线变化营造出如诗如画的意境，让品茶成为一场视觉与味觉的双重享受。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-4">多用途应用</h3>
                            <p className="text-gray-600">广泛适用于各类茶品、咖啡，更可用于红酒醒酒和白酒快速陈化，一器多用，满足多样化饮品体验需求。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 产品特色 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">产品特色</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">专利技术</h3>
                                <p className="text-gray-600">拥有多项国际专利，创新的超音波提香技术为传统茶道带来全新体验。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">精工制造</h3>
                                <p className="text-gray-600">采用优质材料，精心打造每一个细节，确保产品的耐用性和使用体验。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">茶道传承</h3>
                                <p className="text-gray-600">传承传统茶道精神，融合现代科技，打造独特的品茶体验。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">便捷使用</h3>
                                <p className="text-gray-600">简单易用的操作方式，让每个人都能轻松体验云雾缭绕的意境。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 联系我们 */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">了解更多</h2>
                    <p className="text-xl text-gray-700 mb-8">如果您对我们的产品感兴趣，欢迎联系我们了解更多详情</p>
                    <Link
                        href="/products/teapot/contact"
                        className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-3 rounded-full font-medium inline-block transition-colors"
                    >
                        联系我们
                    </Link>
                </div>
            </section>
        </div>
    );
}