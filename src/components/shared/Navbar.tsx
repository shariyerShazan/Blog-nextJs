"use client"
import React from 'react'
import { ModeToggle } from './ModeToggle'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import Link from 'next/link'




const Navbar = () => {
    const [position, setPosition] = React.useState("bottom")
    let user  = true
  return (
   <div className='border-b '>
         <div className='flex justify-between w-[90%] mx-auto py-3 '>
        <div className='text-2xl font-extrabold'>
            Bloggy
        </div>
        <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-4'>
                        <Link href={"/"}>
                            Home
                        </Link>
                        <Link href={"/about"}>
                        About
                        </Link>
                    </div>

        <ModeToggle />


       {/* dropdown for dashboard */}
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Dashboard</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Shariyer Shazan</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
       {/* others */}
          {
            user? 
                <Button >
                    Logout
                </Button> :
                <Button >
                    Login
                </Button>

          }
        </div>
    </div>
   </div>
  )
}

export default Navbar
