import Image from 'next/image';
import Link from 'next/link';

export default function TigerCoursePage() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            {/* 产品英雄区域 */}
            <section className="relative bg-green-700 text-white py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">泰格趣拼课程</h1>
                        <p className="text-xl mb-8">基于结构拼读法的系统英语课程，让孩子轻松掌握英语发音和拼写规则</p>
                        <Link
                            href="#curriculum"
                            className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            了解课程体系
                        </Link>
                    </div>
                </div>
            </section>

            {/* 课程介绍 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <Image src="/tiger/tiger-course.jpg" alt="泰格趣拼课程" width={640} height={480} />
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold mb-6">什么是趣拼课程？</h2>
                            <p className="text-gray-600 mb-4">
                                泰格趣拼课程是一套基于结构拼读法的系统英语学习课程，专为中国学生设计，
                                帮助学生快速掌握英语发音规则，建立语音与拼写的联系。
                            </p>
                            <p className="text-gray-600 mb-4">
                                通过趣味化的教学方式和科学的学习路径，让孩子在轻松愉快的氛围中掌握英语的基础规则，
                                培养良好的语感和学习兴趣。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 课程体系 */}
            <section id="curriculum" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">课程体系</h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* 时间线 */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

                            {/* 课程阶段 */}
                            <div className="relative z-10">
                                {/* 阶段1 */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                            1
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2 text-center">入门阶段：音素启蒙</h3>
                                        <p className="text-gray-600 mb-4">通过趣味游戏和互动活动，帮助孩子认识英语的基本音素，建立语音意识。</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>认识26个字母及其发音</li>
                                            <li>掌握基本元音和辅音</li>
                                            <li>简单单词的拼读练习</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 阶段2 */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                            2
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2 text-center">基础阶段：拼读规则</h3>
                                        <p className="text-gray-600 mb-4">系统学习英语的拼读规则，掌握单词的构成原理和发音规律。</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>元音字母组合的发音规则</li>
                                            <li>辅音字母组合的发音规则</li>
                                            <li>常见音节类型及其发音</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 阶段3 */}
                                <div className="mb-12">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                            3
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2 text-center">进阶阶段：应用实践</h3>
                                        <p className="text-gray-600 mb-4">将所学拼读规则应用到实际阅读和口语表达中，提升综合语言能力。</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>短文阅读与拼读练习</li>
                                            <li>口语表达与发音纠正</li>
                                            <li>拼写规则与词汇扩展</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* 阶段4 */}
                                <div>
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl z-10">
                                            4
                                        </div>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-semibold mb-2 text-center">提高阶段：自主学习</h3>
                                        <p className="text-gray-600 mb-4">培养自主学习能力，掌握英语学习的方法和策略，为终身学习打下基础。</p>
                                        <ul className="list-disc list-inside text-gray-600">
                                            <li>自主阅读与理解</li>
                                            <li>拼读技巧与策略</li>
                                            <li>语言运用与创新表达</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 课程特点 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">课程特点</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">科学的教学体系</h3>
                            <p className="text-gray-600">基于语言学研究和教育心理学，构建科学系统的英语拼读教学体系。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">趣味互动教学</h3>
                            <p className="text-gray-600">通过游戏、动画、互动活动等多种形式，激发学习兴趣，提高学习效果。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">AI辅助学习</h3>
                            <p className="text-gray-600">结合泰格AI技术，提供个性化学习路径和实时反馈，提升学习效率。</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 号召行动 */}
            <section className="py-16 bg-green-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">开启孩子的英语学习之旅</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">立即报名泰格趣拼课程，让孩子轻松掌握英语发音和拼写规则！</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            联系我们
                        </Link>
                        <Link
                            href="/products/tiger-ai"
                            className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium inline-block transition-colors"
                        >
                            了解泰格AI
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}