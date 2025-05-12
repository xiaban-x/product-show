export default function Footer() {
    return (
        <footer className="bg-gray-100 py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">泰格AI</h3>
                        <p className="text-gray-600">专注于英语教育的AI辅助学习平台，让学习更高效、更有趣。</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">联系我们</h3>
                        <p className="text-gray-600">邮箱: contact@tigerai.com</p>
                        <p className="text-gray-600">电话: 400-123-4567</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">关注我们</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                <span className="sr-only">微信</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.69,11.52c-0.59,0-1.06-0.47-1.06-1.06s0.47-1.06,1.06-1.06s1.06,0.47,1.06,1.06S9.28,11.52,8.69,11.52z M15.03,11.52c-0.59,0-1.06-0.47-1.06-1.06s0.47-1.06,1.06-1.06s1.06,0.47,1.06,1.06S15.62,11.52,15.03,11.52z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M16.52,14.33c-1.18,2.33-4.25,3.88-6.52,3.88c-2.26,0-5.34-1.55-6.52-3.88c-0.07-0.14-0.12-0.29-0.12-0.45c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1c0,0.1,0.02,0.2,0.05,0.29c0.69,1.37,2.96,2.34,4.59,2.34c1.63,0,3.9-0.97,4.59-2.34c0.03-0.09,0.05-0.19,0.05-0.29c0-0.55,0.45-1,1-1c0.55,0,1,0.45,1,1C16.64,14.04,16.59,14.19,16.52,14.33z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                <span className="sr-only">微博</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.52,11.92C20.52,11.92,20.52,11.92,20.52,11.92c-0.77-0.23-1.3-0.38-0.9-1.37c0.44-1.07,0.48-2,0.12-2.66c-0.67-1.22-2.5-1.16-4.6-0.03c0,0-0.66,0.29-0.49-0.23c0.32-1.03,0.28-1.89-0.23-2.39C13.21,4.04,10.66,4,8.49,5.48C5.23,7.65,2.71,11.65,2.71,15.23c0,6.38,8.17,10.25,16.17,10.25c10.47,0,17.46-6.08,17.46-10.9C36.34,11.35,31.55,9.24,20.52,11.92z M18.93,23.58c-5.06,5-14.5,2.21-17.41-3.36c-1.38-2.65-1.14-5.75,0.33-8.5c1.47-2.75,4.06-4.8,6.95-5.62c2.94-0.83,6.07-0.4,8.23,1.5c2.23,1.97,2.68,4.65,1.08,7.08C19.61,12.83,21.96,20.58,18.93,23.58z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} 泰格AI. 保留所有权利。</p>
                </div>
            </div>
        </footer>
    );
}