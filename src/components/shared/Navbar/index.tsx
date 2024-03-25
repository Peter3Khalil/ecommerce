"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { MenuIcon } from '../Icons'
import { Sidebar } from '../Sidebar'

type SidebarContextType = {
  isVisible: boolean;
  show: () => void;
  hide: () => void;
};

export const SidebarContext = React.createContext<SidebarContextType>({
  isVisible: false,
  show: () => {},
  hide: () => {},
});

export const Navbar = () => {
  const [isVisible, setIsVisible] = React.useState(false)
  const show = () => {
    setIsVisible(true)
  }
  const hide = () => {
    setIsVisible(false)
  }
  return (
    <SidebarContext.Provider value={{ isVisible, show, hide }}>
      
    <nav className='w-full h-14 shadow-md flex items-center justify-between px-6 py-2'>
      <Button onClick={show} className='flex items-center gap-2'>
        <MenuIcon />
        All Categories
      </Button>
      <Sidebar />
    </nav>
    </SidebarContext.Provider>
  )
}
