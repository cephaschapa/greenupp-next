import Image from 'next/image'

function MainCard({image, title, subtext}) {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 shadow-md p-2 border border-gray-100 rounded-3xl py-7 mt-8 md:mx-4">
            <Image src={image} height={64} width={64} alt="greenupp-realtime-data-capture"/>
            <h1 className="text-[#16a085] font-bold">{title}</h1>
            <p className="text-center">{subtext}</p>
            <button className="text-white btn p-4 px-8 rounded-full">Learn More</button>
        </div>
    )
}

export default MainCard
