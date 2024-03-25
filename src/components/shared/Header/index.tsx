'use client';
import Image from 'next/image';
import React from 'react';
import { MdHeadphones, HiOutlineShoppingBag } from '@/components/shared/Icons';
import { Search, SearchTrigger } from './Search';
import { Tooltip } from '../Tooltip';

export const Header = () => {
  return (
    <header className='w-full relative h-20 gap-12 py-3 bg-background text-foreground flex items-center justify-between px-6'>
      <Image
        src={
          'https://themes.muffingroup.com/be/babyshop2/wp-content/uploads/2023/11/babyshop2.svg'
        }
        alt='logo'
        width={150}
        height={50}
        className='w-auto h-full shrink-0'
      />
      <Search />
      <div className='flex items-center gap-5 md:gap-3 shrink-0'>
        <SearchTrigger />

        <a
          href='tel:+201234566'
          className='text-sm flex items-center gap-2 group'
        >
          <MdHeadphones className='size-6' />
          <span className='text-muted-foreground hidden md:inline-block group-hover:text-foreground'>
            +201234566
          </span>
        </a>

        <button
          title='Search'
          className='text-sm flex items-center gap-2 group'
        >
          <div className='relative'>
            <HiOutlineShoppingBag className='size-6' />
            <span className='absolute -top-2 -right-2 size-5 leading-none bg-foreground text-background text-[10px] flex items-center justify-center rounded-full'>
              15
            </span>
          </div>
          <span className='text-muted-foreground hidden md:inline-block group-hover:text-foreground'>
            $0.00
          </span>
        </button>
      </div>
    </header>
  );
};
