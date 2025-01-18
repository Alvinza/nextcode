import './App.css';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Title from './components/Title';
import About from './components/About';
import Campus from './components/Campus';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoPlayer from './components/VideoPlayer';



function App() {

    const [playState, setPlayState] = useState(false);

    return (
     <div>
        <Navbar />
        <Hero />
        <div className='container'>
            <Title subTitle='Our Program' title='What We Offer' />
            <Programs />
            <About setPlayState={setPlayState} />
            <Title subTitle='Gallery' title='Campus Photos' />
            <Campus />
            <Title subTitle='Testimonials' title='What Student say' />
            <Testimonials />
            <Title subTitle='Contact US' title='Get in touch' />
            <Contact />
            <Footer />
        </div>
        <VideoPlayer playState={playState} setPlayState={setPlayState} />
     </div>
    );
}

export default App;
