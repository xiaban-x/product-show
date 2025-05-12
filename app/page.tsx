'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 默认重定向到泰格AI首页
    router.push('/products/tiger-ai');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">正在跳转...</h1>
        <div className="flex space-x-4">
          <a href="/products/tiger-ai" className="text-blue-600 hover:underline">泰格AI</a>
          <span className="text-gray-400">|</span>
          <a href="/products/teapot" className="text-amber-700 hover:underline">云雾飘渺</a>
        </div>
      </div>
    </div>
  );
}
