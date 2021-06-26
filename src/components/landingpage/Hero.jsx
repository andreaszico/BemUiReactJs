import React, { useEffect } from 'react'
import './Hero.css'
import ScrollReveal from 'scrollreveal';

function Hero() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1500,
        delay: 500
    })

    const className = [
       '.heading'
    ]

    useEffect(() => {
        sr.reveal(className.join(", "), {
            origin: 'top',
            interval: 100
        })
    })
    return (
        <div className="h-500 relative flex flex-col justify-center font-roboto">
            <div className="w-full text-3xl text-left z-20">
                <p className="w-full text-3xl text-center z-10 font-bold text-white uppercase heading">Badan Eksekutif Mahasiswa <br />
                    Institut Teknologi Del</p>
            </div>
            <div className="opacity-25 w-full h-full absolute bg-gradient-to-r from-blue-500 to-yellow-500 z-10"></div>
            <img className="h-full w-full object-cover absolute" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/IT_Del_Drone2.jpg" alt="" />
        </div>
    )
}

export default Hero
