'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TeapotPage() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            {/* 产品英雄区域 */}
            <section className="relative bg-gradient-to-r from-amber-700 to-amber-900 text-white py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">云雾飘渺——可雾化提香泡茶壶</h1>
                        <p className="text-2xl mb-4">物华天宝——何天华博士出品</p>
                        <p className="text-xl mb-8">云瀑开仙雾，茶香飘四海</p>
                        <Link
                            href="#details"
                            className="bg-white text-amber-700 hover:bg-amber-50 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            了解产品详情
                        </Link>
                    </div>
                </div>
            </section>

            {/* 产品介绍 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-gray-700">
                        <p className="text-lg mb-6">
                            中华茶道文化博大精深，讲究天人合一与茶禅一味。茶道不仅是一种饮品的享用方式，更是一种融合生理、心理的身心灵开展之道。
                            通过观茶、赏茶、闻茶、品茶的过程，加上环境氛围与器具设计所呈现的意境，让品茶者获得高品质的幸福感。
                        </p>
                        <p className="text-lg mb-6">
                            本创作是一种具有雾化提香功能的泡茶壶杯或茶海，由元培医事科技大学何天华教授经多年研究开发。这款创新产品能制造出云雾飘渺效果，
                            当茶水从壶里倒入茶海时，刹那间即可营造出浓郁飘逸的茶雾，利用超音波振动产生提香效果。
                        </p>
                    </div>
                </div>
            </section>

            {/* 产品特点 */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">产品特点</h2>
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

            {/* 产品展示 */}
            <section id="details" className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">产品展示</h2>

                    {/* 渲染图展示 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6">标准渲染图</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <div key={num} className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src={`/teapot/${num}.jpg`}
                                        alt={`茶壶渲染图${num}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 mt-4 text-center">产品多角度渲染展示</p>
                    </div>

                    {/* 实物图展示 */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold mb-6">实物展示</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/teapot/实物图1.jpg"
                                    alt="实物图1"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/teapot/实物图2.jpg"
                                    alt="实物图2"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 说明书展示 */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">产品说明书</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative aspect-[9/10] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/teapot/说明书1.jpg"
                                    alt="说明书第一页"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative aspect-[9/10] overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src="/teapot/说明书2.jpg"
                                    alt="说明书第二页"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 专家介绍 */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">专家推荐</h2>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <p className="text-lg text-gray-700 mb-6">
                                林志城台湾大学食品科技博士<br />
                                元培医事科技大学校长<br />
                                台湾茶协会名誉理事长<br />
                                亚太茶博创会主席<br />
                                (Asia-Pacific Tea Expo)<br />
                                台湾健康管理学会理事长
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}