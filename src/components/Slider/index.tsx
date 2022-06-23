import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from '@/src/assets/images/1.png';
import img2 from '@/src/assets/images/2.png';
import img3 from '@/src/assets/images/3.png';
import eye from '@/src/assets/eye.svg';

export const Slider = () => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = (): void => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row px-5 justify-center w-full">
          <Swiper
            slidesPerView={windowSize.width > 400 ? 4 : 1}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image
                layout="fixed"
                width={320}
                height={260}
                src={img1.src}
                alt="Nice pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <Image
                layout="fixed"
                width={320}
                height={260}
                src={img3.src}
                alt="Nice pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                layout="fixed"
                width={320}
                height={260}
                src={img2.src}
                alt="Nice pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                layout="fixed"
                width={320}
                height={260}
                src={img3.src}
                alt="Nice pic"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                layout="fixed"
                width={320}
                height={260}
                src={img1.src}
                alt="Nice pic"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="-mt-20 z-10   hidden lg:block">
          <Image
            layout="fixed"
            width={130}
            height={130}
            src={eye.src}
            alt="Nice pic"
          />
        </div>
      </div>
    </>
  );
};
