import { EmojiSadIcon, GlobeIcon, TrendingUpIcon } from "@heroicons/react/outline"
import Head from "next/head"
import Banner2 from "../components/general/Banner2"
import Header from "../components/navigation/Header"

function theproblem() {
    return (
        <div>
            <Head>
                <title>Grenupp | AI, Precision Agriculture, Blockchain, Realtime Analytics, Realtime Communicaion</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            {/* Banner */}
            <Banner2 />
            {/* Main */}
            <main className="p-2 h-auto">
                <div className="flex overflow-hidden space-x-3 py-5">
                    <div className="p-2 h-32 w-52 bg-gradient-to-bl from-green-400 via-green-600 to-green-700 rounded-3xl flex flex-col items-center justify-center text-white">
                        <GlobeIcon className="h-10 w-10 text-white"/>
                        <p className="text-center">Climate Change </p>
                    </div>
                    <div className="p-2 h-32 w-52 bg-gradient-to-bl from-purple-400 via-purple-600 to-purple-700 rounded-3xl flex flex-col items-center justify-center text-white">
                        <TrendingUpIcon className="h-10 w-10 text-white"/>
                        <p className="text-center">Food demands</p>
                    </div>
                    <div className="p-2 h-32 w-52 bg-gradient-to-bl from-yellow-400 via-yellow-600 to-yellow-700 rounded-3xl flex flex-col items-center justify-center text-white">
                        <EmojiSadIcon className="h-10 w-10 text-white"/>
                        <p className="text-center">Unsustainable Methods</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default theproblem
