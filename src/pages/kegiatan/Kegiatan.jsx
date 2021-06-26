import React, { useEffect, useState } from 'react'
import Container from '../../components/container/Container'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import dummy from '../../utils/dummy';

function Kegiatan() {

    const [modal, setModal] = useState({
        show: false,
        title: '',
        description: ''
    });

    const [tools, setTools] = useState({
        headerToolbar: {
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        },
        buttonText: {
            today: 'today',
            month: 'months',
            week: 'week',
            day: 'day',
            list: 'list'
        },
        initialDate: Date.now(),
        navLinks: true,
        businessHours: true,
        dayMaxEventRows: true,
        views: {
            timeGrid: {
                dayMaxEventRows: 6
            }
        },
        selectable: true,
        timeZone: 'UTC',
        eventClick: function (event, jsEvent, view) {
            eventClick(event, jsEvent, view)
        },
        events: dummy
    });

    const eventClick = (event, jsEvent, view) => {
        const {
            title
        } = event.event._def;
        const {
            description
        } = event.event._def.extendedProps;
        setModal({
            show: true,
            title: title,
            description: description
        })

    }


    return (
        <div className="relative w-full h-full flex">
            <Container>
                <div className="relative flex flex-col">
                    <p className="text-4xl font-light">Kegiatan</p>
                    <div className="text-sm mt-10 font-roboto z-0">
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
                            {...tools}
                        />
                    </div>
                </div>
            </Container>

            {modal.show === true && (
                <div className="absolute top-0 left-0 right-0 bottom-0 mt-20 z-10 flex justify-center">
                    <div className="bg-white lg:w-4/5 w-4/5 fixed mt-10 shadow-lg rounded-lg flex lg:flex-row flex-col overflow-y-sroll lg:h-auto max-h-auto">
                        <img src="http://bem-itdel.site/assets/images/thumbnail-postingan/del1.PNG" className="lg:w-1/2 w-full lg:h-96 rounded-lg h-0" alt="" srcset="" />
                        <div className="p-10">
                            <p className="text-4xl">{modal.title}</p>
                            <p className="text-sm font-light mt-3">{modal.description}</p>
                            <p className="text-sm font-light mt-2 lg:inline-block hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum explicabo voluptatibus officiis quam, esse sapiente quidem quos laudantium facilis animi obcaecati, sed amet, vel sequi dolore rerum. Voluptate, itaque eveniet.</p>
                            <p className="text-sm font-light mt-2 lg:inline-block hidden">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum explicabo voluptatibus officiis quam, esse sapiente quidem quos laudantium facilis animi obcaecati, sed amet, vel sequi dolore rerum. Voluptate, itaque eveniet.</p>
                            <div className="flex justify-end mt-5 items-end">
                                <button className="px-5 py-1 shadow-md rounded text-white bg-red-400" onClick={() => setModal(false)}>close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Kegiatan
