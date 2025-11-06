
import React from 'react';

const words = [
    { text: 'Innovation', icon: '💡' },
    { text: 'Leadership', icon: '⭐' },
    { text: 'Community', icon: '🤝' },
    { text: 'Growth', icon: '📈' },
    { text: 'Vision', icon: '👁️' },
    { text: 'Excellence', icon: '🏆' },
    { text: 'Impact', icon: '💥' },
];

const TextSlider: React.FC = () => {
    const slideContent = [...words, ...words]; // Duplicate for seamless loop

    return (
        <div className="bg-gray-900 text-white py-4 overflow-hidden">
            <div className="w-full flex">
                <div className="flex animate-slide-left whitespace-nowrap">
                    {slideContent.map((item, index) => (
                        <div key={index} className="flex items-center mx-6 text-lg font-semibold">
                            <span>{item.icon}</span>
                            <span className="ml-2">{item.text}</span>
                        </div>
                    ))}
                </div>
                 <div className="flex animate-slide-left whitespace-nowrap">
                    {slideContent.map((item, index) => (
                        <div key={index} className="flex items-center mx-6 text-lg font-semibold">
                            <span>{item.icon}</span>
                            <span className="ml-2">{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TextSlider;