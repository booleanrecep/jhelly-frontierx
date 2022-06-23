import React, { useId, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '@/src/assets/images/logo.png';

export const Header = (): JSX.Element => {

  const dropId = useId().replace(/[:]/g, '');
  const [value, setValue] = useState<string>("")

  const getValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  console.log('value: ',value)

  return (
    <div className='flex justify-between items-center bg-black px-5 md:px-10 h-20 md:h-24'>
      <Image
        src={logo.src}
        layout='fixed'
        width={200}
        height={23}
        alt='FrontierX Logo'
      />
      <form className='flex items-center w-full justify-end mr-4 md:mr-10'>
        <label htmlFor='voice-search' className='sr-only'>
          Search
        </label>
        <div className='relative w-10/12 md:w-2/3  text-[13px] '>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <FiSearch className='w-5 h-5 text-gray-500 dark:text-gray-400' />
          </div>
          <input
            type='text'
            id='voice-search'
            className='border bg-[#1F1F1F] text-white border-gray-300  block w-full pl-10 py-1 md:py-2.5 '
            placeholder='Search...'
            value={value}
            onChange={getValue}
          />
        </div>
      </form>
      <div className=' text-white hidden justify-around gap-10  text-[15px] md:flex  '>
        <Link href={'#'}>Lorem</Link>
        <Link href={'#'}>Lorem</Link>
        <Link href={'#'}>Lorem</Link>
      </div>
      <div className='md:hidden flex'>
        <div className='flex justify-center'>
          <div>
            <div className='dropstart relative'>
              <GiHamburgerMenu
                id={`drop${dropId}`}
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='w-7 h-7 text-gray-500 dark:text-gray-400 cursor-pointer'
              />

              <ul
                className='
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none'
                aria-labelledby={`drop${dropId}`}

              >
                <li>
                  <a
                    className='dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 '
                    href='#'
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li>
                  <a
                    className='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                    href='#'
                  >
                    Lorem ipsum
                  </a>
                </li>
                <li>
                  <a
                    className='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                    href='#'
                  >
                    Lorem ipsum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
