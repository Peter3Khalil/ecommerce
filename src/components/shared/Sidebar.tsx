'use client';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import React, { FC } from 'react';

interface SidebarProps
  extends React.HTMLProps<HTMLDivElement>,
    React.ComponentProps<typeof SheetContent> {
  trigger: React.ReactNode;
}
export const Sidebar: FC<SidebarProps> = ({
  children,
  side,
  className,
  trigger,
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        {trigger}
      </SheetTrigger>
      <SheetContent side={side} className={className}>
        {children}
      </SheetContent>
    </Sheet>
  );
};
