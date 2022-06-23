import { FC } from 'react';
import { FiGrid, FiClipboard, FiCommand } from 'react-icons/fi';

export const Group: FC<any> = (): JSX.Element => {
  return (
    <div className="middle flex justify-center flex-col items-center my-7 ">
      <p className="text-3xl text-white font-extrabold text[45px]">
        Lorem ipsum
      </p>
      <p className=" mt-4 text-[16px] font-normal">
        Created by: <span className="text-[#FC364C]">Lorem ipsum</span>
      </p>
      <p className="my-4 text-[16px] font-normal">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
      </p>
      <div className=" flex justify-center my-10 flex-wrap  gap-6">
        <button
          type="button"
          className="!text-[15px] bg-[#0D0D0D95] w-fit py-3 px-14 gap-1 flex justify-center items-center hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          <FiCommand />
          Upload
        </button>
        <button
          type="button"
          className="!text-[15px] bg-[#0D0D0D] w-fit py-3 px-14 gap-1 flex justify-center items-center hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          <FiGrid />
          Upload
        </button>
        <button
          type="button"
          className="!text-[15px] bg-[#0D0D0D95] w-fit py-3 px-14 gap-1 flex justify-center items-center  hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          <FiClipboard />
          Upload
        </button>
      </div>
    </div>
  );
};
