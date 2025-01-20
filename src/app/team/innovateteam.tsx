import React from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
});

const members = [
    { src: '/innovate/team-1-user-1.jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-2.jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-3.jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-1 (1).jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-2 (1).jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-3 (1).jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-1 (2).jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-2 (2).jpg', alt: 'Member' },
    { src: '/innovate/team-1-user-3 (2).jpg', alt: 'Member' },
];

const InnovateTeam = () => {
    return (
        <div className="w-screen bg-white flex justify-center  mt-10 items-center py-12">
            <div className=" mx-auto px-4">
                {/* Heading */}
                <div className={`text-center mb-12 ${montserrat.className}`}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Team</h2>
                </div>

                {/* Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center hover:scale-95 duration-500"
                        >
                            <Image
                                src={member.src}
                                alt={member.alt}
                                width={316}
                                height={231}
                                className="w-full h-auto "
                            />
                            <div className={`${montserrat.className} p-6 text-center`}>
                                <h5 className="text-lg font-bold text-gray-800">Username</h5>
                                <h6 className="text-sm font-semibold text-gray-500">Profession</h6>
                                <div className="flex justify-center items-center gap-4 mt-4 text-blue-500">
                                    <FaFacebook className="w-5 h-5" />
                                    <FaInstagram className="w-5 h-5" />
                                    <FaTwitter className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InnovateTeam;