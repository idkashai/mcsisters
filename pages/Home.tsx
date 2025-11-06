
import React from 'react';
import Hero from '../components/Hero';
import TextSlider from '../components/TextSlider';
import OurDuo from '../components/OurDuo';
import Podcast from '../components/Podcast';
import Gallery from '../components/Gallery';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <TextSlider />
            <OurDuo />
            <Podcast />
            <Gallery />
        </>
    );
};

export default Home;
