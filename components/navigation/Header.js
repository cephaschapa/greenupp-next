import Image from 'next/image'
import { AdjustmentsIcon, BadgeCheckIcon, BeakerIcon, MenuAlt4Icon, QuestionMarkCircleIcon, TrendingUpIcon, XIcon } from '@heroicons/react/solid'
import {useState, useEffect} from 'react'
import Acrylic from 'react-acrylic'
import MenuItems from './MenuItems'
import Link from 'next/link'
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
            <header className={`${opacity ? 'opacity-90': 'bg-black'} bg-white flex z-50 h-20 w-full  shadow-md items-center p-3 justify-between fixed top-0`}>
            <div className="w-48 relative h-full">
                <Link href="/"><Image src="/logo.png" layout="fill"/></Link>
            </div>
            <div className="">
                <MenuAlt4Icon onClick={openDrawer} className="h-8 w-8 text-gray-500"/>
            </div>
        
        </header>      
        {
            drawer ? 
            
            <div className="fixed text-gray-600 h-full w-full bg-white z-50 p-2 flex flex-col bg-gradient-to-bl from-white via-white to-gray-200">
            {/* Header */}
                <div className="flex justify-end pt-4">
                    <XIcon onClick={closeDrawer} className="h-10 -10 text-gray-600 "/>
                </div>
                <div className="flex flex-col items-center mt-10 h-full">
                    <p className="text-3xl p-4">MENU</p>
                    <div className="grid grid-cols-3 space-x-3">
                        <MenuItems icon={<QuestionMarkCircleIcon className="h-10 w-10 text-center"/>} title="The Problem" route="./theproblem"/>
                        <MenuItems icon={<BeakerIcon className="h-10 w-10 text-center"/>} title="The Solution"/>
                        <MenuItems icon={<BadgeCheckIcon className="h-10 w-10 text-center"/>} title="The Impact"/>
                    </div>
                    <div className="flex flex-col items-center py-10 space-y-5 w-full">
                        <p className="font-bold">About</p>
                        <p className="font-bold">Contacts</p>
                        <p className="font-bold">News</p>
                        <p className="font-bold">Partners</p>
                        <p className="font-bold">Clients</p>
                        <div className="w-full space-x-4 flex justify-around">
                            <button className="rounded-full shadow-md border border-gray-200 flex-grow font-bold p-4 bg-white text-black">Sign in</button>
                            <button className="rounded-full  flex-grow font-bold shadow-md border border-gray-200 p-4 bg-white text-black ">Sign up</button>
                        </div>
                    </div>
                </div>
            {/* Body */}
            {/* Footer */}
        </div> : null
        }
       </div> 
    )
}

export default Header
