import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import img1 from '@/src/assets/images/1.png';
import img2 from '@/src/assets/images/2.png';
import img3 from '@/src/assets/images/3.png';
import eye from '@/src/assets/eye.svg';

const imageData = [
  {
    id: 11,
    src: img1,
  },
  {
    id: 22,
    src: img3,
  },
  {
    id: 33,
    src: img2,
  },
  {
    id: 44,
    src: img3,
  },
  {
    id: 55,
    src: img1,
  },
];

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
      <div className='flex flex-col items-center ml-0 md:ml-5'>
        <div className='flex flex-row px-5 justify-center w-full'>
          <Swiper
            slidesPerView={windowSize.width > 400 ? 4 : 1}
            pagination={{
              clickable: true,
            }}
            className='mySwiper'
          >
            {imageData.map((i: any) => (
              <SwiperSlide key={i.id}>
                <Image
                  layout='fixed'
                  width={320}
                  height={260}
                  src={i.src}
                  alt='Nice pic'
                />
              </SwiperSlide>
            ))}
            
          </Swiper>
        </div>
        <div className='-mt-20 z-10   hidden lg:block'>
          <Image
            layout='fixed'
            width={130}
            height={130}
            src={eye.src}
            alt='Nice pic'
          />
        </div>
      </div>
    </>
  );
};
