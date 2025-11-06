
import React from 'react';

const AwardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-gold mr-3 flex-shrink-0"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
);

const SocialLink: React.FC<{href: string; children: React.ReactNode}> = ({href, children}) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-red transition-colors duration-300">
        {children}
    </a>
)

const ProfileAnisha: React.FC = () => {
    return (
        <div className="bg-cream py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 items-start">
                    <div className="md:col-span-2 order-2 md:order-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Anisha Sharma
                        </h1>
                        <p className="text-lg text-gray-600 font-semibold mb-4">Founder & Chief Operating Officer | Owner of 4 McDonald’s Franchises</p>

                         <div className="flex items-center space-x-4 mb-6">
                            <SocialLink href="https://www.linkedin.com/in/anisha-sharma-8980b3247/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </SocialLink>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-4">
                           Anisha Sharma is an accomplished leader driving operational excellence across 4 McDonald’s franchises. With a career spanning from finance to franchising, Anisha excels in building scalable systems, integrating technology, and empowering high-performance teams that consistently deliver results.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                           Her leadership is grounded in values of inclusion and opportunity. Anisha is a proud sponsor of Southall Athletic Women’s Football Club, helping to provide resources, confidence, and pathways for Asian women in football. She also serves as a Board Member of Ealing Business Improvement District (Make it Ealing) and an Advisory Board Member of the West London Chamber of Commerce, where she contributes her insights to strengthen local business communities.
                        </p>
                         <p className="text-gray-700 leading-relaxed mb-6">
                           She is also an active member of the McDonald’s UK Women’s Network and the UN Women’s Network Briefing Club, advancing conversations on leadership, gender equality, and collective action.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Recognition & Features</h2>
                        <ul className="space-y-3 text-gray-700 mb-6">
                            <li className="flex items-start"><AwardIcon /> Cover story in Franchisee First Magazine: From Finance to Franchise – Anisha Sharma’s Journey to McDonald’s Success</li>
                            <li className="flex items-start"><AwardIcon /> Featured in The Telegraph on her entrepreneurial journey</li>
                            <li className="flex items-start"><AwardIcon /> Finalist in the Hospitality and Leisure category at the Chamber of Commerce Awards</li>
                        </ul>

                        <p className="text-gray-700 leading-relaxed mb-4">
                           Anisha’s approachable and values-driven leadership style has made her a trusted voice in business. She speaks openly on operational strategy, inclusion in leadership, and the role of values in shaping sustainable success.
                        </p>
                        <p className="text-gray-700 leading-relaxed font-semibold italic">
                           Anisha is open to speaking engagements on leadership, operational excellence, diversity in business, and building inclusive opportunities. Her approachable and values-driven style connects with audiences, sparking meaningful conversations and action.
                        </p>
                    </div>
                     <div className="md:col-span-1 order-1 md:order-2 w-full">
                        <div className="relative mt-[20px] md:mt-0">
                            <img src="/images/anisha.png" alt="Anisha Sharma" className="w-full" />
                             <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cream to-transparent md:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAnisha;