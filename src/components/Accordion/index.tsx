import Link from 'next/link';
import { FC, useId } from 'react';
interface Props {
  title: any;
  children: JSX.Element | JSX.Element[];
}
export const Accordion: FC<Props> = ({ title, children }): JSX.Element => {
  const accordionId = useId().replace(/[:]/g, '');
  return (
    <>
      <div className='accordion p-3' id={`acco${accordionId}`}>
        <div className='accordion-item '>
          <h2 className='accordion-header mb-0' id={`head${accordionId}`}>
            <button
              className='
              accordion-button
              relative
              flex
              items-center
              w-full
              !text-white
              // after:!text-white
              p-5
              text-[16px] text-left
              border-0
              !shadow-none 
              transition
              focus:outline-none
              !rounded-none 
              !rounded-t
              !bg-[#0d0d0d80]'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target={`#collapse${accordionId}`}
              aria-expanded='true'
              aria-controls={`collapse${accordionId}`}
            >
              {title}
            </button>
          </h2>
          <div
            id={`collapse${accordionId}`}
            className='accordion-collapse collapse show'
            aria-labelledby={`head${accordionId}`}
            data-bs-parent={`#acco${accordionId}`}
          >
            <div className='accordion-body p-5 bg-[#0d0d0d80] !rounded-b'>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
