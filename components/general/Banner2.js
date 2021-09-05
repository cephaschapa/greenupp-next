import Image from "next/image"

function Banner2() {
    return (
        <div className="relative h-96 w-full mt-20 bg-gray-800 rounded-b-3xl">
            <Image src="/env (3).svg" className="absolute rounded-b-3xl z-20" layout="fill" objectFit="cover"/>
            <div className="relative p-2 text-white h-full flex flex-col z-30 justify-center">
                <p className="text-3xl font-bold">The Problem</p>
                <p className="text-gray-100">Lets first understand the problem at large.</p>
            </div>
        </div>
    )
}

export default Banner2
