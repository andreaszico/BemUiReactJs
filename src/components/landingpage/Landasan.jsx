import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal';

function Landasan() {

    const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        delay: 500
    })

    const className = [
        '.landasan', '.landasan-child'
    ]

    useEffect(() => {
        sr.reveal(className.join(", "), {
            origin: 'left',
            interval: 200
        })

        sr.reveal('.image', {
            origin: 'top',
            interval: 200
        })
    })

    return (
        <div className="mb-40 mt-10">
            <div className="flex items-center justify-center">
                <div className="search flex items-center justify-center lg:w-3/5 w-full border-2 border-indigo-400 rounded-md bg-white">
                    <input className="w-full p-5 py-3 font-roboto font-light text-sm focus:border-transparent focus:outline-none" placeholder="Search" />
                    <i className="h-full fa fa-search pr-4 z-20 bg-white"></i>
                </div>
            </div>
            <div className="lg:px-4 px-0 flex justify-between mt-32 flex-wrap">
                <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center pr-5">
                    <p className="landasan-child text-4xl uppercase font-black tracking-wider lg:text-left text-center">Landasan</p>
                    <p className="landasan-child text-2xl uppercase font-light leading-normal lg:text-left text-center mt-5">Martuhan, Marroha,<br />Marbisuk</p>
                    <p className="landasan-child text-sm font-light leading-normal text-center lg:text-left mt-5">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                    <button className="landasan-child p-2 w-28 bg-indigo-900 text-sm my-5 font-medium text-white rounded shadow-lg">Read More</button>
                </div>
                <div className="lg:w-1/2 w-full flex justify-between lg:mt-10 mt-40">
                    <div className="flex-1 lg:ml-2 image">
                        <img src="https://img.freepik.com/free-photo/praying-hands-with-faith-religion-belief-god-power-hope-devotion_79161-710.jpg?size=626&ext=jpg" className="w-full h-full object-cover" alt="" srcSet="" />
                    </div>
                    <div className="flex-1 ml-2 -translate-y-20 transform image">
                        <img src="http://bem-itdel.site/assets/images/marroha.jpg" className="w-full h-full object-cover" alt="" srcSet="" />
                    </div>
                    <div className="flex-1 ml-2 image">
                        <img src="http://bem-itdel.site/assets/images/marbisuk.jpg" className="w-full h-full object-cover" alt="" srcSet="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landasan
