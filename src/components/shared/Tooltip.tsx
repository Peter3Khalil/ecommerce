'use client';
import React, { FC } from 'react';
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
interface TooltipProps extends React.HTMLProps<HTMLDivElement>,React.ComponentProps<typeof TooltipContent> {
  children: React.ReactNode;
  text: string;
}
export const Tooltip: FC<TooltipProps> = ({ children,text,side,className }) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger className={className}>{children}</TooltipTrigger>
        <TooltipContent side={side}>
          <p>{text}</p>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  );
};
