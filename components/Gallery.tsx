import React from 'react';

const images = [
  '/images/IMG-20250915-WA00016.jpg', '/images/IMG-20250915-WA0005.jpg',
  '/images/IMG-20250915-WA0008.jpg', '/images/IMG-20250915-WA0009.jpg',
  '/images/IMG-20250915-WA0010.jpg', '/images/IMG-20250915-WA0011.jpg',
  '/images/IMG-20250915-WA0012.jpg', '/images/IMG-20250915-WA0013.jpg'
];

const imageSizes = [
  { width: 'w-80', height: 'h-48' },
  { width: 'w-64', height: 'h-80' },
  { width: 'w-96', height: 'h-56' },
  { width: 'w-72', height: 'h-48' },
];

const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const SparkleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
  </svg>
);

const CircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <circle cx="12" cy="12" r="6" />
    </svg>
);

const DiamondIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 21.1a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

const separatorIcons = [PlusIcon, SparkleIcon, CircleIcon, DiamondIcon];

const GalleryRow: React.FC<{ images: string[]; reverse?: boolean; startOffset?: number }> = ({ images, reverse = false, startOffset = 0 }) => {
    const animationClass = reverse ? 'animate-slide-right' : 'animate-slide-left';
    const allImages = [...images, ...images]; // Duplicate for seamless animation

    const renderRowContent = () => (
        allImages.map((src, index) => {
            const size = imageSizes[(index + startOffset) % imageSizes.length];
            const IconComponent = separatorIcons[index % separatorIcons.length];
            const showIcon = index < allImages.length - 1;

            return (
                <div key={`img-${index}`} className={`relative flex-shrink-0 ${size.width} ${size.height}`}>
                    <img src={src} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover rounded-xl shadow-lg" />
                    {showIcon && (
                        <div className="absolute top-1/2 right-0 z-10 flex items-center justify-center w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full transform translate-x-1/2 -translate-y-1/2 shadow-lg">
                            <IconComponent className="w-6 h-6 text-brand-gold" />
                        </div>
                    )}
                </div>
            );
        })
    );

    return (
        <div className="w-full flex">
            <div className={`flex ${animationClass} whitespace-nowrap items-center py-4`}>
                {renderRowContent()}
            </div>
             <div className={`flex ${animationClass} whitespace-nowrap items-center py-4`}>
                {renderRowContent()}
            </div>
        </div>
    );
};

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-16 md:py-24 bg-white overflow-hidden relative" style={{ background: 'radial-gradient(ellipse at center, hsla(0, 0%, 85%, 0.25) 0%, transparent 70%), white' }}>
             <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>Gallery</h2>
                    <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto"></div>
                </div>
            <div className="flex flex-col">
                <GalleryRow images={images.slice(0, 4)} startOffset={0}/>
                <div className="z-10 -mt-16 md:-mt-24">
                    <GalleryRow images={images.slice(4, 8)} reverse startOffset={1}/>
                </div>
                <div className="z-20 -mt-16 md:-mt-24">
                     <GalleryRow images={images.slice(2, 6)} startOffset={2}/>
                </div>
            </div>
        </section>
    );
};

export default Gallery;