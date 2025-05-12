import Link from 'next/link';

export default function TigerContactPage() {
    return (
        <div className="font-[family-name:var(--font-geist-sans)]">
            {/* 页面标题区域 */}
            <section className="relative bg-blue-700 text-white py-20 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">联系我们</h1>
                        <p className="text-xl mb-8">我们期待与您交流，为您提供专业的英语学习解决方案</p>
                    </div>
                </div>
            </section>

            {/* 联系方式和工作时间 */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">联系方式</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-gray-600">邮箱：contact@tigerai.com</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-gray-600">电话：400-123-4567</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-600">地址：北京市海淀区中关村科技园区</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4">工作时间</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <span className="font-medium">周一至周五：</span>
                                            <span className="text-gray-600">9:00 - 18:00</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <span className="font-medium">周六：</span>
                                            <span className="text-gray-600">10:00 - 16:00</span>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <div>
                                            <span className="font-medium">周日：</span>
                                            <span className="text-gray-600">休息</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 联系表单 */}
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-6 text-center">给我们留言</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">姓名</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="请输入您的姓名"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">电话</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="请输入您的电话"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">邮箱</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="请输入您的邮箱"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">留言内容</label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="请输入您的留言内容"
                                    ></textarea>
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        提交留言
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* 常见问题 */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">如何开始使用泰格AI？</h3>
                            <p className="text-gray-600">您可以通过我们的官方网站注册账号，或者联系我们的客服团队获取详细的使用指南。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">泰格AI适合什么年龄段的学习者？</h3>
                            <p className="text-gray-600">泰格AI适合各个年龄段的英语学习者，我们会根据学习者的水平和需求提供个性化的学习内容。</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">如何获取技术支持？</h3>
                            <p className="text-gray-600">您可以通过电话、邮件或在线客服获取技术支持，我们的团队将在工作时间内为您提供帮助。</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 返回首页 */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">开始您的智能英语学习之旅</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">立即体验泰格AI，让英语学习变得更加高效、有趣！</p>
                    <Link
                        href="/products/tiger-ai"
                        className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full font-medium inline-block transition-colors"
                    >
                        返回首页
                    </Link>
                </div>
            </section>
        </div>
    );
}