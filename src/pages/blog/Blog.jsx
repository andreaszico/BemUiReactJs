import React from 'react'
import './blog.css'

function Blog() {
    return (
        <div className="my-14 container mx-auto lg:px-28 px-4 py-9 flex flex-wrap font-roboto">
            <div className="lg:w-8/12 w-full flex flex-col items-start">
                <p className="text-4xl text-left uppercase font-light">IT DEL MENAWARKAN APLIKASI MENGAJAR (JARINGAN GURU MENGAJAR) PADA LOKAKARYA</p>
                <p className="text-sm text-left font-medium mt-4">By Santo Harianja</p>
                <p className="text-xs text-left font-light mt-1">Last Update: Fri, 04 Jun 2021 |
                    Pendidikan</p>
                <div className="w-full h-96">
                    <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/pca-2.jpg" className="mt-5 object-cover w-full h-full" alt="" srcSet="" />
                </div>

                <div className="text-sm text-justify mt-10 text-blog font-light">
                    <p>Bertempat di Aula Kantor Dinas Pendidikan Toba Samosir, diadakan pertemuan dengan Guru dan Kepala Sekolah SMP,SMA/SMK sederajat guna peningkatan kualitas mutu pendidikan didaerah Toba Samosir.</p>

                    <p>Diawali dengan doa acara ini dibuka dengan pemaparan dari Bapak Drs. Lalo Hartono Simanjuntak, M.Si selaku Staf Ahli Bupati Bidang Pendidikan, Kesehatan, Infrastruktur dan Pemberdayaan Masyarakat yang diawali dengan memaparkan latar belakang dari tujuan peningkatan mutu pendidikan di Tobasa. Beliau mengatakan salah satu latar belakangnya adalah dengan melihat rangking kualiatas pendidikan Toba Samosir yang menurun dari tahun lalau peringkat 20 dari 33 kabupaten/kota tahun ini menjadi peringkat 25 dari 33 kabupaten/kota.</p>

                    <p>Selain persoalan diatas, ada beberapa persoalan lain yang dianggap menjadi salah satu unsur penting dalam penilaian mutu pendidikan di Toba Samosir diantaranya rendahnya tingkat siswa SMP yang masuk ke sekolah unggulan, rendahnya prestasi guru-guru yang ada di Toba Samosir dan lain sebagainya.</p>

                    <p>Untun meningkatkan kualitas mutu pendidikan di Tobasa, Bapak Lalo menjelaskan strategi yang akan ditempuh guna peningkatan mutu pendidikan Di Toba Samosir yakni dengan sistem Resource Sharing Berbasis Cluster.</p>

                    <p>Setelah Bapak Lalo memaparkan permasalahan yang mempengaruhi mutu pendidikan di Toba Samosir, Rektor IT Del Bapak Prof.Ir. Togar M. Simatupang, M. Tech., Ph.D memberikan sedikit pengarahan yang dilanjutkan dengan pemaparan dari Bapak Roy Dedi Lumbantobing S.T, M.ICT tentang Aplikasi yang akan membantu para guru-guru di Toba Samosir untuk dapat mempermudah pekerjaan Bapak/Ibu Guru yakni Aplikasi MengaJr (Jaringan Guru Mengajar). Nantinya aplikasi ini akan bisa diakses di Smartphone. Dimana segala data-data kegiatan guru-guru atau pun data siswa tersebut misalnya data absensi siswa, data nilai siswa nantinya diakses melalui smartphone.</p>

                    <p>Semoga aplikasi yang ditawarkan oleh IT Del ini dapat membantu dalam peningkatan mutu pendidikan di Kabupaten Toba Samosir.</p>
                </div>
            </div>

            <div className="lg:w-4/12 w-full lg:p-4 p-0 lg:pt-0 pt-5">
                <p className="text-xl uppercase font-bold">Postingan Terbaru</p>

                <div className="flex bg-white rounded-lg h-20 mt-4">
                    <div className="image h-20">
                        <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/del1.PNG" className="h-full object-cover rounded-l-lg" alt="" srcSet="" />
                    </div>
                    <div className="text p-4">
                        <a href="" className="hover:text-blue-300 text-sm font-light">Start Woman in Tech With Tokopedia</a>
                    </div>
                </div>


                <div className="flex bg-white rounded-lg h-20 mt-4">
                    <div className="image h-20">
                        <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/del1.PNG" className="h-full object-cover rounded-l-lg" alt="" srcSet="" />
                    </div>
                    <div className="text p-4">
                        <a href="" className="hover:text-blue-300 text-sm font-light">Start Woman in Tech With Tokopedia</a>
                    </div>
                </div>


                <div className="flex bg-white rounded-lg h-20 mt-4">
                    <div className="image h-20">
                        <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/del1.PNG" className="h-full object-cover rounded-l-lg" alt="" srcSet="" />
                    </div>
                    <div className="text p-4">
                        <a href="" className="hover:text-blue-300 text-sm font-light">Start Woman in Tech With Tokopedia</a>
                    </div>
                </div>

                <div className="flex bg-white rounded-lg h-20 mt-4">
                    <div className="image h-20">
                        <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/del1.PNG" className="h-full object-cover rounded-l-lg" alt="" srcSet="" />
                    </div>
                    <div className="text p-4">
                        <a href="" className="hover:text-blue-300 text-sm font-light">Start Woman in Tech With Tokopedia</a>
                    </div>
                </div>

                <div className="flex bg-white rounded-lg h-20 mt-4">
                    <div className="image h-20">
                        <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/del1.PNG" className="h-full object-cover rounded-l-lg" alt="" srcSet="" />
                    </div>
                    <div className="text p-4">
                        <a href="" className="hover:text-blue-300 text-sm font-light">Start Woman in Tech With Tokopedia</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog
