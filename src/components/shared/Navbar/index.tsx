'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Tooltip } from '@/components/shared/Tooltip';
import { MenuIcon } from '@/components/shared/Icons';
import React, { FC } from 'react';
import { Sidebar } from '../Sidebar';

export const Navbar: FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <nav
      className={cn(
        'w-full h-14 bg-background text-foreground flex px-6 items-center justify-between shadow-md',
        className
      )}
      {...props}
    >
      <Sidebar
        side={'left'}
        trigger={
          <Button className='flex items-center gap-2'>
            <MenuIcon className='size-6' />
            <span>All Categories</span>
          </Button>
        }
        className='w-full md:w-96'
      >
        <h1>Hi</h1>
      </Sidebar>
    </nav>
  );
};
