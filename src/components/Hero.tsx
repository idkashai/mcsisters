import React, { useState, useEffect } from "react";
import img1 from '@/assets/images/1.jpg';
import img2 from '@/assets/images/2.jpg';
import img3 from '@/assets/images/3.jpg';

const images = [img1, img2, img3];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
    <section className="relative w-full h-[65vh] md:h-screen overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                        style={{ backgroundImage: `url(${src})` }}
                    />
                ))}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
           
            {/* Mobile: bottom-centered, smaller text and lighter bg so image shows through; desktop unchanged */}
            <div className="relative z-10 flex items-end justify-center md:justify-start h-full pb-4 md:pb-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center md:text-left">
                    <div className="w-full max-w-sm md:max-w-xl">
                        <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-4 md:mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                            <span className="inline-block border-b-4 border-brand-red pb-2 drop-shadow-[0_8px_18px_rgba(0,0,0,0.6)]">
                                <span className="text-cream font-bold">Leading with</span> <span className="font-handwriting text-3xl md:text-7xl text-brand-gold">Vision</span>,
                                <br className="md:hidden" />
                                <span className="text-cream font-bold"> Driven by Impact</span>
                            </span>
                        </h1>
                        <div>
                            <p className="text-sm md:text-xl font-light drop-shadow-[0_8px_20px_rgba(0,0,0,0.75)]">
                                Meet Shafali and Anisha, a dynamic sister duo transforming business through innovation, leadership, and community commitment. Proud members of McDonald's UK Women's Network and the UN Women's Network Briefing Club.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hide carousel dots on small screens; show from md and up */}
            <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-brand-gold" : "bg-white/50 hover:bg-white/75"}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
