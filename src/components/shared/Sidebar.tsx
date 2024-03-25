import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { SidebarContext } from './Navbar';
import { CloseIcon, DressIcon, MdHeadphones } from './Icons';
import { Button } from '../ui/button';
import Image from 'next/image';

export const Sidebar = () => {
  const { isVisible, hide } = React.useContext(SidebarContext);
  return (
    <aside
      className={cn(
        'w-full h-full transition-all duration-500 ease-in-out flex fixed z-20 left-0 top-0',
        {
          'translate-x-0': isVisible,
          '-translate-x-full': !isVisible,
        }
      )}
    >
      <section
        className={cn(
          'bg-background flex flex-col p-12 overflow-y-auto md:w-96 w-full relative border'
        )}
      >
        <button
          onClick={hide}
          title='Hide sidebar'
          className='absolute top-2 right-3'
        >
          <CloseIcon className='size-6 md:size-5' />
        </button>
        <div className='flex flex-col gap-6'>
          <h2 className='font-bold text-2xl'>Categories</h2>
          <ul className='flex flex-col gap-2 pb-12 border-b'>
            {Array.from({ length: 5 }).map((item, i) => (
              <Item key={i} icon={<DressIcon />}>
                Dresses and Suits
              </Item>
            ))}
          </ul>
        </div>

        <div className='w-full gap-6 p-10 bg-muted rounded-md shrink-0 flex flex-col items-start my-10'>
          <Image
            src={'assets/babyshop.svg'}
            width={10}
            height={10}
            alt='Image'
            className='w-[100px] h-auto'
          />
          <h3 className='text-xl  font-bold'>Sweater</h3>
          <Button className='w-full'>Show Details</Button>
        </div>

        <a
          href='tel:+201234566'
          className='text-sm flex items-center gap-2 group'
        >
          <MdHeadphones className='size-6' />
          <span className='text-muted-foreground hidden md:inline-block group-hover:text-foreground'>
            +201234566
          </span>
        </a>
      </section>
      {/* Overlay */}
      <section
        onClick={hide}
        className='hidden md:block h-full flex-1 bg-transparent'
      ></section>
    </aside>
  );
};

interface ItemProps extends React.HTMLProps<HTMLLIElement> {
  icon: any;
}
const Item: FC<ItemProps> = ({ children, icon, className, ...props }) => {
  return (
    <li
      className={cn(
        'flex items-center transition-all duration-300 ease-in-out px-2 py-1 rounded hover:bg-muted text-foreground cursor-pointer gap-2',
        className
      )}
      {...props}
    >
      <div className='bg-accent rounded-md p-2'>{icon}</div>
      {children}
    </li>
  );
};
