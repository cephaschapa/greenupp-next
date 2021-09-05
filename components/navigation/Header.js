import Image from 'next/image'
import { AdjustmentsIcon, BadgeCheckIcon, BeakerIcon, MenuAlt4Icon, QuestionMarkCircleIcon, TrendingUpIcon, XIcon } from '@heroicons/react/outline'
import {useState, useEffect} from 'react'
import Acrylic from 'react-acrylic'
import MenuItems from './MenuItems'
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
                <Image src="/logo.png" layout="fill"/>
            </div>
            <div className="">
                <MenuAlt4Icon onClick={openDrawer} className="h-8 w-8 text-gray-500"/>
            </div>
        
        </header>      
        {
            drawer ? 
            
            <div className="fixed h-full w-full bg-black z-50 p-2 flex flex-col opacity-80">
            {/* Header */}
                <div className="flex justify-end pt-4">
                    <XIcon onClick={closeDrawer} className="h-10 -10 text-white"/>
                </div>
                <div className="flex flex-col items-center mt-10 h-full">
                    <p className="text-white text-3xl p-4">MENU</p>
                    <div className="grid grid-cols-3 space-x-3">
                        <MenuItems icon={<QuestionMarkCircleIcon className="h-10 w-10 text-center"/>} title="The Problem"/>
                        <MenuItems icon={<BeakerIcon className="h-10 w-10 text-center"/>} title="The Solution"/>
                        <MenuItems icon={<BadgeCheckIcon className="h-10 w-10 text-center"/>} title="The Impact"/>
                    </div>
                    <div className="flex flex-col items-center py-10 space-y-5">
                        <p className="text-white">About</p>
                        <p className="text-white">Contacts</p>
                        <p className="text-white">News</p>
                        <p className="text-white">Partners</p>
                        <p className="text-white">Clients</p>
                        <div className="space-x-4">
                            <button className="rounded-full  w-24 font-bold p-4 bg-white text-black">Sign in</button>
                            <button className="rounded-full  w-24 font-bold p-4 bg-white text-black ">Sign in</button>
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
