import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.scss';
import imagesSm from '../../img/carousel/sm/*.jpg';
import imagesMd from '../../img/carousel/md/*.jpg';
import imagesLg from '../../img/carousel/lg/*.jpg';

export function SimpleSlider() {
    let settings = {
        lazyLoad: 'progressive',
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        className: 'carousel-wrapper', 
    };

    return (
        <Slider {...settings}>
            {Object.values(imagesLg).map((slide, index) => {
                return (
                    <a href ='#' className='carousel-item' key={index}>
                        <div className='carousel-item-wrapper'>
                            <picture>
                                <source media='(min-width: 500px) and (max-width: 699px)' srcSet={`${imagesMd[index + 1]}`}/> 
                                <source media='(min-width: 700px)' srcSet={`${imagesLg[index + 1]}`}/>
                                <img srcSet={`${imagesSm[index + 1]}`} alt='banner'/>
                            </picture>
                        </div>
                    </a>
                )
            })}
        </Slider>
    );
}