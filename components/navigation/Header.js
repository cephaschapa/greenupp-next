import Image from 'next/image'
import { AdjustmentsIcon, BadgeCheckIcon, BeakerIcon, MenuAlt4Icon, QuestionMarkCircleIcon, TrendingUpIcon, UserIcon, XIcon } from '@heroicons/react/solid'
import {useState, useEffect} from 'react'
import Acrylic from 'react-acrylic'
import MenuItems from './MenuItems'
import Link from 'next/link'
import { MenuAlt3Icon, TranslateIcon } from '@heroicons/react/outline'
function Header() {
    const [drawer, setOpenDrawer] = useState(false)
    const [opacity, setOpacity] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', function(){
            setOpacity(true)
            // console.log(opacity)
        })
    }, [])

    const openDrawer = (e) =>{
        e.preventDefault()
        setOpenDrawer(true)
    }
    const closeDrawer = (e) =>{
        e.preventDefault()
        setOpenDrawer(false)
    }
    return (
       <div className="">
            <header className={`${opacity ? 'opacity-90': 'bg-black'} bg-white flex z-50 h-20 w-full  shadow-md items-center p-3 justify-between fixed top-0 lg:px-52`}>
            <div className="w-48 relative h-full">
                <Link href="/"><Image src="/logo.png" layout="fill"/></Link>
            </div>
            {/* Nav Menu Main*/}
            <div className="hidden lg:inline-flex space-x-2">
                    <ul className="flex space-x-5 font-bold">
                        <Link href="/"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">Home</li></Link>
                        <Link href="/app"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">App</li></Link>
                        <Link href="/services"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">Services</li></Link>
                        <Link href="/"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">News & Blogs</li></Link>
                        <Link href="/about"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">About</li></Link>
                        <Link href="/research"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">Research and Findings</li></Link>
                        <Link href="/support"><li className="cursor-pointer hover:bg-gray-300 p-2 px-4 rounded-full">Support</li></Link>
                    </ul>
                
                    <TranslateIcon className="h-10 bg-gray-200 p-2 text-gray-600 rounded-full"/>
                    <UserIcon  className="h-10 bg-gray-200 p-2 text-gray-600 rounded-full"/>
                </div>
            <div className="bg-gray-200 p-2 rounded-full lg:hidden" onClick={openDrawer}>
                <MenuAlt3Icon className="h-8 w-8 text-gray-500"/>
            </div>
        
        </header>      
            <div className={`${drawer? 'right-0 h-screen transition duration-200 ease-linear': '-right-full transform duration-500 ease-linear'} fixed transform duration-300 w-full h-screen top-0 text-gray-600 bg-white z-50 p-2 flex flex-col`}>
            {/* Header */}
                <div className="flex justify-between pt-2 px-1">
                    <TranslateIcon onClick={closeDrawer} className="h-12 bg-gray-200 p-2 text-gray-600 rounded-full"/>
                    <XIcon onClick={closeDrawer} className="h-12 bg-gray-200 p-2 text-gray-600 rounded-full"/>
                </div>
                
                {/* Nav Menu Drawer menu */}
                <div className="flex flex-col items-center mt-5 h-full">
                    <p className="text-3xl font-bold p-4">MENU</p>
                    {/* <div className="grid grid-cols-3 space-x-3">
                        <MenuItems icon={<QuestionMarkCircleIcon className="h-10 w-10 text-center"/>} title="The Problem" route="./theproblem"/>
                        <MenuItems icon={<BeakerIcon className="h-10 w-10 text-center"/>} title="The Solution"/>
                        <MenuItems icon={<BadgeCheckIcon className="h-10 w-10 text-center"/>} title="The Impact"/>
                    </div> */}
                    <div className="flex flex-col items-center space-y-4 w-full mt-5">
                        <p className="font-bold">App</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Research & Findings</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">News</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">About</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Careers</p>
                        <div className="divider bg-gray-200 w-1/2 h-0.5"></div>
                        <p className="font-bold">Support</p>
                        <div className="w-full space-x-4 flex justify-around items-end bottom-16 absolute p-3">
                            <button className="rounded-full shadow-md border border-gray-200 flex-grow font-bold p-4 bg-white text-black">Sign in</button>
                            <button className="rounded-full  flex-grow font-bold shadow-md border border-gray-200 p-4 bg-white text-black ">Sign up</button>
                        </div>
                    </div>
                </div>
            {/* Body */}
            {/* Footer */}
        </div>
        
       </div> 
    )
}

export default Header
