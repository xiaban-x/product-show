"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function TigerAIPage() {
  // 在客户端初始化AOS动画库
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* 英雄区域 - 全屏图片背景 */}
      <section className="relative h-screen flex items-center">
        {/* 背景图片 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/temp/1.jpg"
            alt="泰格AI学习平台"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>

        {/* 内容 */}
        <div className="container mx-auto px-4 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              data-aos="fade-up"
            >
              泰格AI
              <br />
              英语学习助手
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-gray-200"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              基于人工智能的英语学习平台，让学习更高效、更有趣
            </p>
            <div data-aos="fade-up" data-aos-delay="200">
              <Link
                href="#features"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium inline-block transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                了解产品特点
              </Link>
            </div>
          </div>
        </div>

        {/* 向下滚动指示 */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </div>
      </section>

      {/* 产品介绍 */}
      <section className="py-24 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-4xl font-bold mb-8 relative">
                什么是泰格AI？
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-blue-400"></span>
              </h2>
              <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                泰格AI是一款专为英语学习者设计的智能学习助手，结合了先进的人工智能技术和独创的结构拼读教学法，
                帮助学生快速掌握英语发音规则，建立语音与拼写的联系。
              </p>
              <p className="text-gray-200 text-lg leading-relaxed">
                通过智能语音识别和实时反馈，泰格AI能够精准评估学生的发音，提供个性化的学习建议，
                让英语学习变得更加高效和有趣。
              </p>
            </div>
            <div
              className="md:w-1/2 mt-12 md:mt-0 relative"
              data-aos="fade-left"
            >
              <div className="relative aspect-[9/16] max-w-sm mx-auto bg-gradient-to-b from-blue-900/10 to-blue-900/5 rounded-2xl p-6">
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl"></div>
                <video
                  src="/tiger/video.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover rounded-xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 z-0"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-10 z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品特点 */}
      <section id="features" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              产品核心特点
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              融合前沿AI技术与先进教学理念，打造全新的英语学习体验
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div
              className="bg-gray-50 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                智能语音识别
              </h3>
              <p className="text-gray-600 leading-relaxed">
                采用先进的AI语音识别技术，精准评估发音，提供即时反馈和纠正建议。
              </p>
            </div>
            <div
              className="bg-gray-50 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                个性化学习路径
              </h3>
              <p className="text-gray-600 leading-relaxed">
                基于学习者的水平和进度，智能推荐个性化学习内容，精准定位薄弱环节。
              </p>
            </div>
            <div
              className="bg-gray-50 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                结构化拼读法
              </h3>
              <p className="text-gray-600 leading-relaxed">
                独创的教学方法，帮助学生快速掌握英语发音规则，建立语音与拼写的联系。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="relative py-24 bg-gray-100">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10 z-0"></div>
                <Image
                  src="/temp/3.jpg"
                  alt="泰格AI学习场景"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl relative z-10"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2" data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-8 text-gray-900 relative">
                突破传统学习瓶颈
                <span className="absolute -bottom-4 left-0 w-20 h-1 bg-blue-500"></span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                泰格AI通过结合科学的教学方法和先进的技术，帮助学习者突破传统英语学习中的常见瓶颈，
                让您的英语学习之旅更加顺畅、高效。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    精准识别发音问题，提供有针对性的纠正方案
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    建立系统的语音规则认知，不再死记硬背
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    智能调整难度，始终保持在最佳学习区间
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 学习效果展示 */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/temp/4.jpeg"
            alt="学习效果背景"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              卓越的学习效果
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              泰格AI帮助全球数万学习者取得了显著进步
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className="flex flex-col items-center bg-white rounded-xl p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                发音准确率提升
              </h3>
              <p className="text-gray-600 text-center">
                在使用泰格AI系统学习3个月后，学生的发音准确率平均提高了85%
              </p>
            </div>
            <div
              className="flex flex-col items-center bg-white rounded-xl p-8 shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="text-5xl font-bold text-blue-600 mb-2">3倍</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                学习效率提升
              </h3>
              <p className="text-gray-600 text-center">
                相比传统学习方法，使用泰格AI的学习者掌握同等知识点的时间缩短至原来的1/3
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 学习者故事 */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4">学习者故事</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              听听他们是如何通过泰格AI改变自己的英语学习之旅
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto p-10 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl"
            data-aos="zoom-in"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="rounded-full overflow-hidden border-4 border-white/20 w-40 h-40 mx-auto">
                  <Image
                    src="/temp/5.jpeg"
                    alt="学生照片"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-lg italic leading-relaxed mb-6">
                  &ldquo;我在泰格AI上学习了3个月，我的英语发音得到了很大的提升。以前总是因为发音不准确而缺乏自信，
                  现在我可以流利地与外国同事交流。泰格AI的个性化学习方案真的非常适合我！&rdquo;
                </blockquote>
                <div className="font-semibold text-xl">张明</div>
                <div className="text-blue-300">市场营销经理，上海</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 号召行动 */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/temp/1.jpg" alt="背景" fill className="object-cover" />
          <div className="absolute inset-0 bg-blue-900/90 z-10"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-20">
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              开始您的智能英语学习之旅
            </h2>
            <p className="text-xl mb-10 text-blue-200">
              立即体验泰格AI，让英语学习变得更加高效、有趣！
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-full font-medium inline-block transition-all duration-300 transform hover:scale-105 shadow-lg"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                联系我们
              </Link>
              <Link
                href="/products/tiger-ai/tiger-course"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium inline-block transition-all duration-300 transform hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                了解趣拼课程
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
