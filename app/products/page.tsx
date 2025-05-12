import Image from 'next/image';
import Link from 'next/link';
export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-amber-700">创新科技 · 智慧生活</h1>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* 泰格AI卡片 */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="aspect-video relative bg-blue-100 overflow-hidden">
                            <Image
                                src="/tiger/tiger-ai.jpg"
                                alt="泰格AI"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-blue-600 mb-3">泰格AI</h2>
                            <p className="text-gray-600 mb-4">基于人工智能的英语学习平台，让学习更高效、更有趣。通过智能语音识别和实时反馈，帮助学生快速掌握英语发音规则。</p>
                            <Link href="/products/tiger-ai" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                                了解更多
                            </Link>
                        </div>
                    </div>

                    {/* 云雾飘渺卡片 */}
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="aspect-video relative bg-amber-100 overflow-hidden">
                            <Image
                                src="/teapot/1.jpg"
                                alt="云雾飘渺"
                                fill
                                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-amber-700 mb-3">云雾飘渺</h2>
                            <p className="text-gray-600 mb-4">创新的可雾化提香泡茶壶，采用超音波技术，让茶香更加浓郁。云瀑开仙雾，茶香飘四海，带来前所未有的品茶体验。</p>
                            <Link href="/products/teapot" className="inline-block bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors">
                                了解更多
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
