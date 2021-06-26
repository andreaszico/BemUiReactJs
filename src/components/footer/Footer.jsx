import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className="bg-white py-5 font-roboto">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="flex flex-col lg:w-2/5  w-full p-5 md:px-4 px-1">
                        <div className="flex items-center">
                            <img src="http://bem-itdel.site/assets/images/Logo-BEM-IT-Del.png" style={{ width: '85px' }} alt="" srcSet="" />
                            <p className="ml-3 font-bold text-xl">BEM IT DEL</p>
                        </div>
                        <p className="font-light text-sm mt-5">Institut Teknologi Del berkunjung ke salah satu sekolah yang ada di Kabupaten Simalungun guna mengajarkan pentingnya teknologi pada masa sekarang ini.</p>
                    </div>
                    <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                        <p className="font-black text-2xl" href="">Info</p>
                        <a className="font-light text-sm mt-3 hover:text-blue-500" href="">Tentang Kami</a>
                        <a className="font-light text-sm mt-3 hover:text-blue-500" href="">Blog</a>
                        <a className="font-light text-sm mt-3 hover:text-blue-500" href="">Kontak</a>
                    </div>
                    <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                        <p className="font-black text-2xl">Link Terkait</p>
                        <a className="font-light text-sm mt-3 hover:text-blue-500" href="">Institut Teknologi Del</a>
                        <a className="font-light text-sm mt-3 hover:text-blue-500" href="">Blog</a>
                    </div>
                    <div className="lg:w-1/5 w-full flex flex-col py-5 md:px-4 px-1">
                        <p className="font-black text-2xl">Kontak</p>
                        <p className="font-light text-sm mt-3 hover:text-blue-500" href="">Jl. P.I Del, Sitoluama Laguboti, Sumatra Utara, Indonesia</p>
                        <a className="font-light text-sm mt-3 hover:text-blue-500" href="">+62 822 - 7685 - 8074</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
