import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../assets/Hobby.css';

const travelImages = [
    { src: "/travel/p1.jpeg", caption: "Oschinenssee et moi..." },
    { src: "/travel/p2.jpeg", caption: "Ils sont chill..." },
    { src: "/travel/p3.jpeg", caption: "Pays-bas et des vélos..." },
    { src: "/travel/p4.jpeg", caption: "Suisse encore..." },
    { src: "/travel/p5.jpeg", caption: "Voila c'est France..." },
];

function Hobby() {
    return (
        <div id="hobby-film-container">
            
            <div className="film-black-bar bar-top">
                <div className="film-holes"></div> 
                <h2 className="hobby-title">Coder pour bâtir, voyager pour s'évader!</h2>
            </div>

          
            <div className="film-white-center">
                <Swiper
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    grabCursor={true} 
                    className="mySwiper"
                >
                    {travelImages.map((img, index) => (
                        <SwiperSlide key={index}>
                            <div className="instagram-frame">
                                <div className="photo-box">
                                    <img src={img.src} alt={img.caption} />
                                </div>
                                <p className="photo-caption">{img.caption}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            
            <div className="film-black-bar bar-bottom">
                <div className="film-holes"></div>
            </div>
        </div>
    );
}

export default Hobby;