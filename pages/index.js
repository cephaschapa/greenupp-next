import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/general/Footer'
import Banner from '../components/landing/Banner'
import MainCard from '../components/landing/MainCard'
import Header from '../components/navigation/Header'
import {useRouter} from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>Greenupp | AI, Precision Agriculture, Blockchain, Realtime Analytics, Realtime Communicaion</title>
        <meta name="description" content="A product of Orion" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <Banner />
      <main className="bg-white p-2 py-10 lg:px-52" id="c">
          <section className="justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-gray-500 text-3xl text-center font-bold">Experience cutting edge technology at the edge</h1> 
              <div className="divider h-1 mt-10 w-24 bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 md:justify lg:grid-cols-3 py-10">
                <MainCard image="/svg/cloud-1.svg" title="Realtime Data Capture" subtext="Capture reatime data from IoT devices."/>
                <MainCard image="/svg/grow-1.svg" title="AI Powered Precision Agriculture" subtext="Automate, visualize and make data driven decisions."/>
                <MainCard image="/svg/book.svg" title="Actionable Data Analytics" subtext="Use the data to predict and anticipate future events."/>
                <MainCard image="/svg/drop.svg" title="Blockchain & Supply Chain Monitoring" subtext="Monitor key information, recursively backtrace problem root causes and facilitate provenance in your supply chain."/>
                <MainCard image="/svg/map-1.svg" title="GPS & Field Mapping" subtext="Use our Geo-mapping and GPS powered technology to map your entire field."/>
                <MainCard image="/svg/message-3.svg" title="Encrypted Messaging and Social Activities" subtext="A social platform to link you to our pool of experts in the field as well as friends."/>
            </div>
          </section>
      </main>
      <section className="h-80 bg-transparent relative">
        <div className="absolute z-30 h-full w-full bg-black  backdrop-filter backdrop-blur-lg bg-opacity-50"></div>
         <div className="z-40 relative p-2 py-20 opacity-95 flex flex-col items-center justify-center space-y-6">
            <p className="text-center text-white text-xl lg:text-3xl">Register For Early Access</p>
            <button onClick={()=>router.push('/beta-program')} className="bg-transparent text-white border-2 border-white p-4 w-36 rounded-full">SIGN UP</button>         </div>
      </section>      
      <Footer />
    </div>
  )
}
