// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper/modules'
import { Card } from './Card'
import { useFetchEvents } from '../hooks/useFetchEvents'
import { differenceInDays, parse, parseISO } from 'date-fns'

export function Slider() {
    const { data, isLoading } = useFetchEvents();
    const todayISO = new Date().toISOString().slice(0, 10);
    const todayDate = parseISO(todayISO);


    const createSwiperSlides = (items) => {
        return items.map((item) => {
            const daysDifference = differenceInDays(parse(item.scheduled_at, 'dd-MM-yyyy', new Date()), todayDate);
    
            if (daysDifference === 0) {
                return (
                    <SwiperSlide key={item.id}>
                        <Card
                            id={item.id}
                            title={item.name}
                            date={item.scheduled_at}
                            img={item.image}
                            time={item.time}
                        />
                    </SwiperSlide>
                );
            }
            return null; 
        }).filter(slide => slide !== null);
    };

    return (
        <div className="container">
            <div className="swiperContainer">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={25}
                    pagination={{
                        el: '.pagination',
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {isLoading ? <p>Loading...</p> : createSwiperSlides(data)}

                </Swiper>
            </div>
            <div className="pagination"></div>
        </div>
    )
}
