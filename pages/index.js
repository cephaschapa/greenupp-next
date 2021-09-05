import Head from 'next/head'
import Footer from '../components/general/Footer'
import Banner from '../components/landing/Banner'
import MainCard from '../components/landing/MainCard'
import Header from '../components/navigation/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Grenupp | AI, Precision Agriculture, Blockchain, Realtime Analytics, Realtime Communicaion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <Banner />
      <main className="bg-white p-2 py-10" id="c">
          <section className="justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-gray-500 text-3xl text-center font-bold">Experience cutting edge technology at the edge</h1> 
              <div className="divider h-1 mt-10 w-24 bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-1 py-10">
                <MainCard image="/svg/cloud-1.svg" title="Realtime Data Capture"/>
                <MainCard image="/svg/grow-1.svg" title="AI  Powered Precision Agriculture"/>
                <MainCard image="/svg/book.svg" title="Actionable Data Analytics"/>
                <MainCard image="/svg/drop.svg" title="Blockchain & Supply Chain Monitoring"/>
                <MainCard image="/svg/map-1.svg" title="GPS & Field Mapping"/>
                <MainCard image="/svg/message-3.svg" title="Decentralised & Encrypted Messaging"/>
            </div>
          </section>
      </main>
      <section className="h-auto bg-transparent relative">
        <div className="absolute z-30 h-full w-full bg-black opacity-50"></div>
         <div className="z-40 relative p-2 py-10 opacity-95 flex flex-col items-center justify-center space-y-6">
            <p className="text-center text-white text-3xl">Sign up for early access</p>
            <button className="bg-transparent text-white border-2 border-white p-4 w-36 rounded-full">Sign Up</button>         </div>
      </section>
      <Footer />
    </div>
  )
}
