import Image from 'next/image'

function MainCard({image, title}) {
    return (
        <div className="flex flex-col justify-center items-center space-y-3 shadow-md p-2 border border-gray-100 rounded-3xl py-7 mt-8">
            <Image src={image} height={64} width={64} alt="greenupp-realtime-data-capture"/>
            <p className="text-[#16a085]">{title}</p>
        </div>
    )
}

export default MainCard
