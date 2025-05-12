'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function TeapotGalleryPage() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)] pt-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">产品展示</h1>

                {/* 渲染图展示 */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">标准渲染图</h2>
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
                    <h2 className="text-2xl font-semibold mb-6">实物展示</h2>
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
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6">产品说明书</h2>
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

                {/* 联系我们 */}
                <div className="text-center py-16">
                    <h2 className="text-3xl font-bold mb-8">了解更多产品信息</h2>
                    <Link
                        href="/products/teapot/contact"
                        className="bg-amber-700 text-white hover:bg-amber-800 px-8 py-3 rounded-full font-medium inline-block transition-colors"
                    >
                        联系我们
                    </Link>
                </div>
            </div>
        </div>
    );
}