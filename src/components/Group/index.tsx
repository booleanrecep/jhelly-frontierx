import { FC } from 'react';
import { FiGrid, FiClipboard, FiCommand } from 'react-icons/fi';

export const Group: FC<any> = (): JSX.Element => {
  return (
    <div className='middle flex justify-center flex-col items-center my-7 text-white '>
      <p className='text-3xl font-extrabold text[45px]'>
        Lorem ipsum
      </p>
      <p className=' mt-4 text-[16px] font-normal'>
        Created by: <span className='text-[#FC364C]'>Lorem ipsum</span>
      </p>
      <p className='my-4 text-[16px] font-normal text-center px-5 md:px-0'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
      <div className=' flex justify-center mb-0 md:my-10 flex-wrap  gap-6'>
        <button
          type='button'
          className='!text-[15px] bg-[#0D0D0D95] w-fit py-3 px-14 gap-1 flex justify-center items-center hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
        >
          <FiCommand />
          Lorem ipsum
        </button>
        <button
          type='button'
          className='!text-[15px] bg-[#0D0D0D] w-fit py-3 px-14 gap-1 flex justify-center items-center hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
        >
          <FiGrid />
          Lorem ipsum
        </button>
        <button
          type='button'
          className='!text-[15px] bg-[#0D0D0D95] w-fit py-3 px-14 gap-1 flex justify-center items-center  hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 '
        >
          <FiClipboard />
          Lorem ipsum
        </button>
      </div>
    </div>
  );
};
