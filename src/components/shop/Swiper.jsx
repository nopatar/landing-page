'use client'
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import styles from '@/styles/components/Swiper.module.css'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper'

export default function SwiperComponent() {
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Mobile.png',
      title: 'Slide 1',
    },
    {
      id: 2,
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Carousel-Slide-1-Quieter-Mobile.png',
      title: 'Slide 2',
    },
    {
      id: 3,
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-2-Redesigned-Carousel-Slide-2-Efficient-Mobile.png',
      title: 'Slide 3',
    },
  ];

  useEffect(() => {
    // Handle mouse events for pause/resume
    const handleMouseEnter = () => {
      if (!swiperRef.current) return;
      const swiper = swiperRef.current.swiper;
      swiper.autoplay.stop();
      swiper.el.classList.add(styles.swiperPaused);
    };

    const handleMouseLeave = () => {
      if (!swiperRef.current) return;
      const swiper = swiperRef.current.swiper;
      swiper.autoplay.start();
      swiper.el.classList.remove(styles.swiperPaused);

      // Reset and restart progress animation
      const activeNavItem = swiper.el.querySelector('.swiper-pagination-bullet-active');
      if (activeNavItem) {
        activeNavItem.classList.remove('swiper-pagination-bullet-active');
        setTimeout(() => {
          activeNavItem.classList.add('swiper-pagination-bullet-active');
        }, 10);
      }
    };

    const swiperEl = swiperRef.current;
    if (swiperEl) {
      swiperEl.addEventListener('mouseenter', handleMouseEnter);
      swiperEl.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (swiperEl) {
        swiperEl.removeEventListener('mouseenter', handleMouseEnter);
        swiperEl.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className={styles.swiperContainer}>
      <Swiper
        ref={swiperRef}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return `<span class="${className}"></span>`;
          },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.image}
              alt={slide.title}
              className={styles.image}
              />
              <div className={styles.overlay}></div>
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}