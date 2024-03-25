import { cn } from '@/lib/utils';
import React from 'react';
import { SidebarContext } from './Navbar';
import { CloseIcon } from './Icons';

export const Sidebar = () => {
  const { isVisible, hide } = React.useContext(SidebarContext);
  return (
    <aside
      className={cn(
        'w-full h-full transition-all duration-500 ease-in-out flex fixed z-20 left-0 top-0',
        {
            "translate-x-0":isVisible,
            "-translate-x-full":!isVisible
        }
      )}
    >
      <section className={cn('bg-background md:w-96 w-full relative border')}>
        <button onClick={hide} title='Hide sidebar' className='absolute top-2 right-3'>
            <CloseIcon className='size-6 md:size-5'/>
        </button>
      </section>
      {/* Overlay */}
      <section
        onClick={hide}
        className='hidden md:block h-full flex-1 bg-transparent'
      ></section>
    </aside>
  );
};
