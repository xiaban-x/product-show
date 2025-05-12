'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@heroui/button';
import Image from 'next/image';
interface Patent {
    id: number;
    title: string;
    description: string;
    image: string;
}

const patents: Patent[] = [
    {
        id: 1,
        title: '基于音节拼读的单调学习系统及其单词学习方法',
        description: '本专利涉及一种基于音节拼读的英语单词学习系统和方法。该系统通过将单词分解为音节，并结合拼读规则，旨在提供一种更直观、更易于掌握的单词学习方式，尤其适用于初学者和需要系统学习拼读规则的学习者。',
        image: '/tiger/patent1.png'
    },
    {
        id: 2,
        title: '英语体系动词性结构表达训练系统及其方法',
        description: '本专利公开了一种用于训练英语动词性结构表达的系统和方法。该系统着重于英语中各种动词的用法、时态、语态以及与其他词汇的搭配，旨在帮助学习者更准确、更流利地运用动词来表达各种复杂的含义。',
        image: '/tiger/patent2.png'
    },
    {
        id: 3,
        title: '英语时态学习系统及对应时态学习方法',
        description: '本专利涉及一种英语时态学习系统以及与该系统相对应的学习方法。该系统旨在帮助学习者系统地理解和掌握英语中各种时态的用法、构成和区别，通过练习和反馈，提高学习者在不同语境下正确运用英语时态的能力。',
        image: '/tiger/patent3.png'
    },
    {
        id: 4,
        title: '含有助动词的学习方法及系统',
        description: '本专利公开了一种关于含有助动词的英语学习方法和系统。该方法和系统专注于英语中助动词的用法、功能以及在不同语法结构中的作用，旨在帮助学习者更好地理解和运用含有助动词的句子，提高英语语法的掌握水平。',
        image: '/tiger/patent4.png'
    },
];

export default function PatentCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? patents.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === patents.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">我们的专利技术</h2>
                <div className="max-w-3xl mx-auto relative">
                    <motion.div
                        key={patents[currentIndex].id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow-md flex flex-col"
                    >
                        <div className="w-full h-full flex items-center justify-center text-gray-500 font-bold">
                            <Image src={patents[currentIndex].image} alt={patents[currentIndex].title} width={300} height={300} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{patents[currentIndex].title}</h3>
                        <p className="text-gray-600">{patents[currentIndex].description}</p>
                    </motion.div>

                    <Button
                        onClick={handlePrevious}
                        className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Button>

                    <Button
                        onClick={handleNext}
                        className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
}