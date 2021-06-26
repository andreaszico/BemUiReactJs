import React, { useEffect } from 'react'
import Hero from '../../components/landingpage/Hero'
import News from '../../components/landingpage/News'
import ScrollReveal from 'scrollreveal';
import Landasan from '../../components/landingpage/Landasan';

function Home() {

    const sr = ScrollReveal({
        distance: '60px',
        duration: 2800,
        delay: 500
    })

    const className = [
       '.search',
    ]

    useEffect(() => {
        sr.reveal(className.join(", "), {
            origin: 'top',
            duration: 500,
            interval: 100
        })
    })

    return (
        <div className="font-roboto mt-14">
            <Hero />
            <div className="container mx-auto px-4 py-9">
                <Landasan />
                <News />
            </div>
        </div>
    )
}

export default Home
