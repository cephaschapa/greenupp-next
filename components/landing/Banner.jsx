import { ChevronDoubleDownIcon } from '@heroicons/react/outline';
import Link from 'next/link';

function Banner() {
  return (
    <section className="flex items-center w-full h-screen relative mt-0">
      <div className="absolute z-30 h-full w-full bg-black opacity-50"></div>
      <div className="absolute z-40 flex flex-col items-center justify-center h-full w-full p-2 space-y-10">
        <p className="font-bold text-4xl text-center text-white lg:text-7xl">
          Software for the open environment
        </p>
        <p className="text-lg text-center text-gray-200 lg:text-3xl">
          Powered by artificial intelligence, driven by values
        </p>
        <Link href="/beta-program">
          <button className="bg-transparent text-white border-2 border-white p-4 w-auto rounded-full">
            Join our βeta Program
          </button>
        </Link>
        <Link href="#c">
          <ChevronDoubleDownIcon className="h-10 w-10 animate-bounce relative top-28 text-white cursor-pointer" />
        </Link>
      </div>
      <video
        className="video"
        autoPlay
        muted
        loop
        // className="transition duration-150 ease-in-out"
      >
        <source src="banner-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
}

export default Banner;
