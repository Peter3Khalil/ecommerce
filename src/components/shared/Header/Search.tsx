import React, { FC } from 'react';
import { IoIosSearch } from '@/components/shared/Icons';
import { cn } from '@/lib/utils';
interface SearchProps extends React.HTMLProps<HTMLDivElement> {
  showIcon?: boolean;
}
export const Search: FC<SearchProps> = ({ className, showIcon=true, ...props }) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };
  return (
    <div
      role='searchbox'
      className={cn(
        'w-full hidden md:flex h-10 border text-muted-foreground items-center pl-4 gap-3',
        {
          'border-foreground text-foreground': isFocus,
        },
        className
      )}
      {...props}
    >
      {showIcon && <IoIosSearch className='size-6' />}
      <input
        type='text'
        placeholder='Enter your search'
        className={cn('w-full h-full border-none outline-none text-sm', {
          'placeholder:text-foreground': isFocus,
        })}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};
