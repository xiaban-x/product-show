import Image from 'next/image';
import Link from 'next/link';

export default function TigerAIPage() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            {/* 产品英雄区域 */}
            <section className="relative bg-blue-700 text-white py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">泰格AI英语学习助手</h1>
                        <p className="text-xl mb-8">基于人工智能的英语学习平台，让学习更高效、更有趣</p>
                        <Link
                            href="#features"
                            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            了解产品特点
                        </Link>
                    </div>
                </div>
            </section>

            {/* 产品介绍 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            <Image
                                src="/tiger/tiger-ai.jpg"
                                alt="泰格AI"
                                width={500}
                                height={400}
                            />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">什么是泰格AI？</h2>
                            <p className="text-gray-600 mb-4">
                                泰格AI是一款专为英语学习者设计的智能学习助手，结合了先进的人工智能技术和独创的结构拼读教学法，
                                帮助学生快速掌握英语发音规则，建立语音与拼写的联系。
                            </p>
                            <p className="text-gray-600 mb-4">
                                通过智能语音识别和实时反馈，泰格AI能够精准评估学生的发音，提供个性化的学习建议，
                                让英语学习变得更加高效和有趣。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 产品特点 */}
            <section id="features" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">产品核心特点</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">智能语音识别</h3>
                            <p className="text-gray-600">采用先进的AI语音识别技术，精准评估发音，提供即时反馈和纠正建议。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">个性化学习路径</h3>
                            <p className="text-gray-600">基于学习者的水平和进度，智能推荐个性化学习内容，精准定位薄弱环节。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">结构化拼读法</h3>
                            <p className="text-gray-600">独创的教学方法，帮助学生快速掌握英语发音规则，建立语音与拼写的联系。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 产品优势 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">为什么选择泰格AI？</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">科学的教学方法</h3>
                                <p className="text-gray-600">基于语言学研究和教育心理学，结合AI技术，打造科学有效的英语学习体系。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">高效学习体验</h3>
                                <p className="text-gray-600">智能算法分析学习数据，优化学习路径，让每分钟的学习都更加高效。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">专业教研团队</h3>
                                <p className="text-gray-600">由资深英语教育专家和AI工程师组成的团队，持续优化产品和内容。</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">持续更新迭代</h3>
                                <p className="text-gray-600">定期更新学习内容和功能，不断提升用户体验和学习效果。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 号召行动 */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">开始您的智能英语学习之旅</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">立即体验泰格AI，让英语学习变得更加高效、有趣！</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            联系我们
                        </Link>
                        <Link
                            href="/products/tiger-ai/tiger-course"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            了解趣拼课程
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}