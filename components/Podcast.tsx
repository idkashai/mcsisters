
import React, { useState } from 'react';

const YoutubeModal: React.FC<{ videoId: string; startTime: number; onClose: () => void }> = ({ videoId, startTime, onClose }) => {
    const origin = window.location.origin;
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                 <button 
                    onClick={onClose} 
                    className="absolute top-2 right-2 md:-top-3 md:-right-3 z-10 bg-gray-900/70 text-white rounded-full p-2 hover:bg-gray-800 transition-colors"
                    aria-label="Close video player"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl bg-black">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=${startTime}&rel=0&enablejsapi=1&origin=${origin}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        title="Embedded YouTube Video"
                        className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};


const Podcast: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const videoId = "rx3Z8V-EKTQ";
    const startTime = 594;

    return (
        <section id="podcast" className="relative bg-gray-800 py-20 md:py-32 flex items-center justify-center text-center text-white min-h-[60vh] md:min-h-[70vh]">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: "url('https://i.ytimg.com/vi/rx3Z8V-EKTQ/maxresdefault.jpg')" }}
            ></div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="mb-6 bg-white/20 hover:bg-white/40 p-6 rounded-full transition-transform duration-300 hover:scale-110"
                    aria-label="Play Podcast Video"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white"><path d="M7 6v12l10-6z"></path></svg>
                </button>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Podcast Features
                </h2>
                <p className="max-w-2xl mx-auto text-lg leading-relaxed mb-8">
                    Tune in to hear Shafali and Anisha share insights on industry trends, leadership, and the future of business and technology.
                </p>
                <a
                    href="https://www.youtube.com/watch?v=rx3Z8V-EKTQ&t=594s"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-red text-white px-8 py-3 rounded-md hover:bg-opacity-80 transition-colors duration-300 font-semibold"
                >
                    See on YouTube
                </a>
            </div>
            {isModalOpen && <YoutubeModal videoId={videoId} startTime={startTime} onClose={() => setIsModalOpen(false)} />}
        </section>
    );
};

export default Podcast;