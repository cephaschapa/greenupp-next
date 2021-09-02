import Head from 'next/head'
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
      <main className="bg-white p-2 py-10">
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
          <section className="h-auto bg-transparent">
            <div className="">
              <p className="text-center">Sign Up For early access</p>
            </div>
          </section>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}
