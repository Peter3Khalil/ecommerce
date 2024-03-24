'use client';
import React, { FC } from 'react';
import {
  Tooltip as TooltipPrimitive,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
interface TooltipProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  text: string;
}
export const Tooltip: FC<TooltipProps> = ({ children, text,className }) => {
  return (
    <TooltipProvider>
      <TooltipPrimitive>
        <TooltipTrigger className={className}>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </TooltipPrimitive>
    </TooltipProvider>
  );
};
