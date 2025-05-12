'use client';

import { Card, CardBody, CardFooter, CardHeader, Image } from '@heroui/react';
import { motion } from 'framer-motion';

interface TeamMember {
    id: number;
    name: string;
    title: string;
    description: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        id: 1,
        name: '李勤骞',
        title: '泰格AI创始人',
        description: '英语学习法5项国家发明专利获得者；前上市公司卓越功勋教师',
        image: '/tiger/李勤骞.png'
    },
    {
        id: 2,
        name: '常诚忠',
        title: '泰格AI市场运营总监',
        description: '新媒体运营负责人，易学聪口才创始人',
        image: '/tiger/常诚忠.png'
    },
    {
        id: 3,
        name: '习祎琼',
        title: '泰格AI商学院院长',
        description: '广东省优生优育专家库成员，扶鹰家庭教育资深院长',
        image: '/tiger/习祎琼.png'
    }
];

export default function TeamMembers() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">我们的专业团队</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <motion.div
                            key={member.id}
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <Card className="h-full">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={200}
                                        height={200}
                                    />
                                    <h3 className="font-bold text-xl">{member.name}</h3>
                                    <p className="text-sm text-default-500">{member.title}</p>
                                </CardHeader>
                                <CardBody className="py-2 text-center">
                                    <p className="text-gray-600">{member.description}</p>
                                </CardBody>
                                <CardFooter className="flex justify-center">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
                                        了解更多
                                    </button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}