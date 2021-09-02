function Banner() {
    return (
        <section className="flex items-center w-full h-screen relative mt-0">
            <div className="absolute flex flex-col items-center justify-center h-full w-full p-2 space-y-4">
                <p className="font-bold text-4xl text-center text-white lg:text-7xl">Software for the open environment</p>
                <p className="text-lg text-center text-gray-200 lg:text-3xl">Powered by artificial intelligence, driven by values</p>
                <button className="bg-transparent text-white border border-white p-4 w-36 rounded-full">Get Started</button>
            </div>
            <video 
                className="video"
                autoPlay
                muted
                loop            
            >
                <source src="banner-video.mp4" type="video/mp4"/>
            </video>
        </section>
    )
}

export default Banner
