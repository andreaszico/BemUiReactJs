import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ScrollReveal from 'scrollreveal';

function News() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 500,
    })

    const className = [
        '.blog-child', 
    ]

    useEffect(() => {
        sr.reveal(className.join(", "), {
            origin: 'top',
            interval: 200
        })

        sr.reveal('.blog-text', {
            origin: 'top',
            interval: 100
        })


    }, [])

    return (
        <div className="mt-16">
            <p className="text-2xl text-center font-black">NEWS UPDATE</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 auto-cols-max gap-4 py-10">
                <Link to="/blog" className="blog-child lg:col-span-2 h-96 relative flex rounded-xl bg-white shadow-md overflow-hidden group hover:opacity-100 ">
                    <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/14.PNG" className="w-full h-full object-cover z-0 rounded-xl" alt="" srcSet="" />
                    <div className="absolute bg-black w-full h-full opacity-50 z-10 rounded-xl"></div>
                    <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-xl p-5 pb-4 ">
                        <p className="text-xl text-white font-bold blog-text">Start Woman in Tech With Tokopedia</p>
                        <p className="text-sm text-white font-light mt-2 transition-all duration-500 group-hover:my-4 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                        <p className="text-xs text-white mt-2 font-medium blog-text"><i className="fa fa-calendar-alt"></i>&nbsp;   17 Agustus 2021</p>
                    </div>
                </Link>
                <Link to="/blog" className="blog-child h-96 relative flex rounded-xl bg-white shadow-md">
                    <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/14.PNG" className="w-full h-full object-cover z-0 rounded-xl" alt="" srcSet="" />
                    <div className="absolute bg-black w-full h-full opacity-50 z-10 rounded-xl"></div>
                    <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-xl p-5 pb-4">
                        <p className="text-xl text-white blog-text">Start Woman in Tech With Tokopedia</p>
                        <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                        <p className="text-xs text-white mt-2 font-medium blog-text"><i className="fa fa-calendar-alt"></i>&nbsp;   17 Agustus 2021</p>
                    </div>
                </Link>
                <Link to="/blog" className="blog-child h-96 relative flex rounded-xl bg-white shadow-md">
                    <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/14.PNG" className="w-full h-full object-cover z-0 rounded-xl" alt="" srcSet="" />
                    <div className="absolute bg-black w-full h-full opacity-50 z-10 rounded-xl"></div>
                    <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-xl p-5 pb-4">
                        <p className="text-xl text-white blog-text">Start Woman in Tech With Tokopedia</p>
                        <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                        <p className="text-xs text-white mt-2 font-medium blog-text"><i className="fa fa-calendar-alt"></i>&nbsp;   17 Agustus 2021</p>
                    </div>
                </Link>
                <Link to="/blog" className="blog-child h-96 relative flex rounded-xl bg-white shadow-md">
                    <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/14.PNG" className="w-full h-full object-cover z-0 rounded-xl" alt="" srcSet="" />
                    <div className="absolute bg-black w-full h-full opacity-50 z-10 rounded-xl"></div>
                    <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-xl p-5 pb-4">
                        <p className="text-xl text-white blog-text">Start Woman in Tech With Tokopedia</p>
                        <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                        <p className="text-xs text-white mt-2 font-medium blog-text"><i className="fa fa-calendar-alt"></i>&nbsp;   17 Agustus 2021</p>
                    </div>
                </Link>
                <Link to="/blog" className="blog-child h-96 relative flex rounded-xl bg-white shadow-md">
                    <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/14.PNG" className="w-full h-full object-cover z-0 rounded-xl" alt="" srcSet="" />
                    <div className="absolute bg-black w-full h-full opacity-50 z-10 rounded-xl"></div>
                    <div className="absolute w-full h-full flex justify-end flex-col z-20 rounded-xl p-5 pb-4">
                        <p className="text-xl text-white blog-text">Start Woman in Tech With Tokopedia</p>
                        <p className="text-sm text-white font-light mt-2 blog-text">Saat ini, industri teknologi terus berkembang menjadi lebih inklusif. Tokoh-tokoh penting dalam teknologi kini tidak hanya didominasi oleh laki-lak...</p>
                        <p className="text-xs text-white mt-2 font-medium blog-text"><i className="fa fa-calendar-alt"></i>&nbsp;   17 Agustus 2021</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default News
