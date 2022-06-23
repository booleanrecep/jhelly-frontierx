import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { FiArchive, FiGrid, FiExternalLink, FiBookOpen } from 'react-icons/fi';
import { FaDiscord, FaInstagram, FaTwitter, } from 'react-icons/fa';
import { GoQuestion } from 'react-icons/go';

import { Accordion } from '@/src/components';
import axios from 'axios';



export const Accordions = () => {
  const [cardData, setCardData] = useState<[]>([])
  const fetchData = async () => {
    const { data } = await axios.get('/api/data')
    setCardData(data.data)
  }
  
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='min-h-[280px] md:min-h-[350px]'>
      <div className='flex justify-center w-full flex-wrap items-start min-h-full mb-4'>
        <div className='flex flex-col w-11/12 md:w-2/5'>
          <Accordion
            title={
              <>
                <FiGrid className='mr-2' />
                Lorem ipsum
              </>
            }
          >
            <Fragment>
              <p className='text-[16px] text-white mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className='grid grid-cols-2 gap-5'>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FiExternalLink className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FaDiscord className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FaInstagram className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FaTwitter className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
              </div>
            </Fragment>
          </Accordion>
        </div>

        <div className='flex flex-col w-11/12 md:w-2/5'>
          <Accordion
            title={
              <>
                <FiGrid className='mr-2' />
                Lorem ipsum
                <GoQuestion  className='ml-2' />
              </>
            }
          >
            <div className='flex flex-wrap gap-1 md:gap-2 h-[250px] overflow-y-scroll scrollbar-custom justify-center'>
              {cardData.map(
                (c: any, ind: number) => (
                  <div
                    key={'keyy' + ind}
                    className='hover:border-2 hover:border-red-900 bg-[#0D0D0D] p-2 md:p-4 text-center flex flex-col justify-center w-[130px] md:w-[150px] h-[100px]'
                  >
                    <h5 className='text-[14px] text-gray-300 hover:text-red-800 font-medium mb-2'>
                      {c.title.slice(0,5)}
                    </h5>
                    <p className='text-white mb-2 text-[17px]'> {c.title.slice(5,15)}</p>
                    <p className='text-[14px] text-gray-400 hover:text-red-800'>
                     {c.date}
                    </p>
                  </div>
                )
              )}
            </div>
          </Accordion>
          <Accordion
            title={
              <>
                <FiGrid className='mr-2' />
                Lorem ipsum
              </>
            }
          >
            <Fragment>
              <p className='text-[16px] text-white mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <div className='grid grid-cols-2 gap-5'>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FiExternalLink className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FaDiscord className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FiArchive className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
                <Link href={'s'}>
                  <span className='w-30  !text-[14px] text-white hover:text-red-800'>
                    <FiArchive className='inline text-[22px] mr-2' />
                    Lorem ipsum
                  </span>
                </Link>
              </div>
            </Fragment>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
