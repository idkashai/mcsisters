import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard: React.FC<{
    name: string;
    title: string;
    description: string;
    imageUrl: string;
    profileUrl: string;
    buttonText: string;
    imageLeft?: boolean;
}> = ({ name, title, description, imageUrl, profileUrl, buttonText, imageLeft = false }) => {
    const imageOrder = imageLeft ? 'md:order-1' : 'md:order-2';
    const textOrder = imageLeft ? 'md:order-2' : 'md:order-1';
    const textAlign = imageLeft ? 'md:text-left' : 'md:text-left';

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`flex justify-center ${imageOrder}`}>
                <img src={imageUrl} alt={name} className="w-full max-w-sm" />
            </div>
            <div className={`flex flex-col justify-center ${textOrder} ${textAlign}`}>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h3>
                <p className="text-md text-gray-600 mt-2 mb-4 font-semibold">{title}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
                <Link to={profileUrl} className="self-start bg-brand-red text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 font-semibold">
                    {buttonText}
                </Link>
            </div>
        </div>
    );
};

const OurDuo: React.FC = () => {
    return (
        <section className="bg-cream py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Meet our DUO</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
                </div>
                <div className="space-y-16 md:space-y-24">
                    <ProfileCard
                        name="Shafali Shown-Keen"
                        title="Founder & Chief Executive Officer"
                        description="Owner of 5 McDonald's franchises, Shafali brings over two decades of leadership expertise. Her strategic vision centers on sustainable growth and innovation, positioning her businesses as industry leaders. She is dedicated to nurturing talent, fostering opportunity, and shaping long-term success."
                        imageUrl="/images/Shafali Shown-Keen.png"
                        profileUrl="/shafali"
                        buttonText="Explore Shafali's Journey"
                        imageLeft
                    />
                    <div className="w-full max-w-4xl mx-auto">
                        <div className="h-0.5 bg-brand-gold opacity-70"></div>
                    </div>
                    <ProfileCard
                        name="Anisha Sharma"
                        title="Founder & Chief Operating Officer"
                        description="Owner of 4 McDonald’s franchises, Anisha drives operational excellence with precision and purpose. She builds teams where employees feel valued, empowered, and motivated to perform at their best. Her leadership proves that a strong, people-centered culture is the key to sustainable, high-performing businesses."
                        imageUrl="/images/anisha.png"
                        profileUrl="/anisha"
                        buttonText="Discover Anisha's Impact"
                        imageLeft={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default OurDuo;