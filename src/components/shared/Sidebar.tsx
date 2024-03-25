import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { SidebarContext } from './Navbar';
import { CloseIcon, DressIcon } from './Icons';

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
        className={cn('bg-background p-12 overflow-y-auto md:w-96 w-full relative border')}
      >
        <button
          onClick={hide}
          title='Hide sidebar'
          className='absolute top-2 right-3'
        >
          <CloseIcon className='size-6 md:size-5' />
        </button>
        <div className='flex flex-col gap-8'>
          <h2 className='font-bold text-2xl'>Categories</h2>
          <ul className='flex flex-col gap-2'>
            {Array.from({ length: 20 }).map((item, i) => (
              <Item key={i} icon={<DressIcon />}>
                Dresses and Suits
              </Item>
            ))}
          </ul>
        </div>
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
