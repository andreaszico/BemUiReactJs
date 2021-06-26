import React from 'react'
import Container from '../../components/container/Container'

function About() {
    return (
        <Container>
            <p className="text-4xl font-light text-center">Tentang Kami</p>
            <div className="flex flex-wrap justify-evenly mt-10">
                <figure className="md:flex md:w-auto lg:w-auto w-full rounded-xl p-8 md:p-0 mt-5">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-md rounded-full md:mx-0 lg:mx-0 mx-auto object-cover" src="https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/06/23/3738060140.jpeg" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <div className="text-cyan-600 font-medium">
                                Jokowi Widodo <br />
                                11419049
                            </div>
                            <div className="text-gray-500">
                                Ketua BEM
                            </div>
                        </blockquote>
                    </div>
                </figure>
           
                <figure className="md:flex md:w-auto lg:w-auto w-full rounded-xl p-8 md:p-0 mt-5 ml-0">
                    <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-md rounded-full md:mx-0 lg:mx-0 mx-auto object-cover" src="https://disk.mediaindonesia.com/thumbs/1800x1200/news/2019/02/44ee663c6e96c5baee0f4b3d2d02967a.jpg" alt="" width="384" height="512" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <blockquote>
                            <div className="text-cyan-600 font-medium">
                                Iriana <br />
                                11419050
                            </div>
                            <div className="text-gray-500">
                                Wakil Ketua BEM
                            </div>
                        </blockquote>
                    </div>
                </figure>
            </div>
        </Container>
    )
}

export default About
