import React, {useState, useEffect} from "react"
import Link from 'next/link'
import Image from 'next/image'
import Head from "next/head"
import { ChatAltIcon, CubeTransparentIcon, DatabaseIcon, DesktopComputerIcon, DeviceMobileIcon, LocationMarkerIcon, MenuAlt3Icon, ShoppingBagIcon, SunIcon, TranslateIcon, TruckIcon } from '@heroicons/react/outline'

const getstarted = () => {
    return (
        <div className="main-wrapper">
            <Head>
                <title>Greenupp | AI, Precision Agriculture, Blockchain, Realtime Analytics, Realtime Communicaion</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <section className="flex item-center justify-center h-screen p-2">
                    {/* Container Wrapper */}
                    <div className="flex flex-col item-center justify-center h-screen w-full rounded-2xl">
                       <div className="text-center p-4 text-2xl text-white"> <p className="text-white text-5xl">Greenupp</p> Getting Started</div>
                       <div className="flex flex-col rounded-3xl w-full justify-center items-center bg-gray-500 h-auto signup-clipped__div  backdrop-filter backdrop-blur-lg bg-opacity-50 pb-10 pt-5 px-4">
                           <div className="flex w-full h-12 border-0 border-white rounded-full space-x-2">
                            <button className="w-full text-gray-700 border-0 bg-white rounded-full">I am a farmer</button>
                            <button className="w-full text-white border-2 border-white rounded-full">I am a consumer</button>
                           </div>
                           <div className="w-full py-4 text-white">
                            <p className="text-lg font-bold"></p>
                            <p className="text-justify">When you register as a farmer you will have access to core services and more. This will ensure you worry less about the unknown and focus on productivity.</p>
                            <p className="text-lg font-bold">Core Features</p>
                            <div className="grid grid-cols-1 space-y-2 w-full py-2">
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <DatabaseIcon className="h-8 w-8"/>
                                    <p className="">IoT Data Capture</p>
                                </div>
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <CubeTransparentIcon className="h-8 w-8"/>
                                    <p className="">Crop Disease Diagnose</p>
                                </div>
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <TruckIcon className="h-8 w-8"/>
                                    <p className="">Blockchain and Supply Chain</p>
                                </div>
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <SunIcon className="h-8 w-8"/>
                                    <p className="">Weather</p>
                                </div>
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <LocationMarkerIcon className="h-8 w-8"/>
                                    <p className="">GPS and Field Mapping</p>
                                </div>
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <ChatAltIcon className="h-8 w-8"/>
                                    <p className="">Chat and Feeds</p>
                                </div>
                                <div className="flex items-center p-2 space-x-2 w-full rounded-full border border-white">
                                    <ShoppingBagIcon className="h-8 w-8"/>
                                    <p className="">Market Place</p>
                                </div>
                                <button className="w-full text-black border-2 p-3 bg-white rounded-full font-bold">PROCEED</button>
                            </div>
                            <div className="grid grid-cols-1 space-y-2 w-full py-2"></div>
                        </div>
                       </div>
                    </div>
                </section>
            </main>
            {/* Small footer */}
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )
}

export default getstarted
