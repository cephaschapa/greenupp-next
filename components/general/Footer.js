import { ChevronDownIcon, GlobeAltIcon, PlusIcon } from "@heroicons/react/outline";
import {useState, useEffect} from 'react'
import Image from "next/image";
function Footer() {
    let [collapse, setCollapse] = useState(0)
    let [country, setCountry] = useState('')

    // Get country from IP
    useEffect(() => {
        fetch('https://extreme-ip-lookup.com/json/')
        .then( res => res.json())
        .then(response => {
            console.log("Country is : ", response);
            setCountry(response.country)
        })
    },[])

    // collapse handler
    const collapseHandler = () => {
        setCollapse(true)
    }
    let date =  new Date().getFullYear();
    return (
        <footer className="-mt-1">
           <div className="bg-gray-200 py-5 pb-10 p-2 space-y-4 lg:space-y-0 grid grid-cols-1 md:grid-cols-2 lg:col  lg:grid-cols-5 lg:px-52 lg:items-baseline lg:space-x-2">
                <div className="hidden lg:inline-flex items-center relative top-10">
                    <Image  src="/logo.png" alt="logo" height={64} width={210} />
                </div>
                <div className="">
                    <div onClick={()=>{
                    //    alert('Collapse')
                    if(collapse==0){
                        setCollapse(1);
                    }
                    else{
                        setCollapse(0);
                    }
                }} className="mt-5 font-bold flex items-center w-full justify-between py-2"><p>Company</p> <span className={`${collapse==1? 'transition duration-150 rotate-45 bg-gray-500 text-white p-2 rounded-full': 'transition duration-150 -rotate-45'} md:hidden`}><PlusIcon className="h-4 w-4 transition duration-150"/></span></div>
                <div className={`${collapse==1? 'inline transition duration-150':'hidden transition duration-150'} w-full md:inline`}>
                    <ul className="space-y-3 px-2 md:px-0">
                        <li>About Greenupp</li>
                        <li>Contact Greenupp</li>
                        <li>News</li>
                        <li>Careers</li>
                    </ul>
                </div>
                </div>
               <div className="divider h-0.5 w-full bg-gray-300 md:hidden"></div>
               <div className="">
                    <div onClick={()=>{
                        //    alert('Collapse')
                        if(collapse==0){
                            setCollapse(2);
                        }
                        else{
                            setCollapse(0);
                        }
                    }} className="font-bold flex items-center w-full justify-between py-2"><p>Services</p> <span className={`${collapse==2? 'transition duration-150 rotate-45 bg-gray-500 text-white p-2 rounded-full': 'transition duration-150 -rotate-45'} md:hidden`}><PlusIcon className="h-4 w-4 transition duration-150"/></span></div>
                    <div className={`${collapse==2? 'inline transition duration-150':'hidden transition duration-150'} w-full md:inline`}>
                        <ul className="space-y-3 px-2 md:px-0">
                            <li>Greenupp SmartNodes</li>
                            <li>Greenupp Blockchain and Supply Chain</li>
                            <li>Greenupp Crop Disease Diagnose</li>
                            <li>Greenupp GPS & Mapping</li>
                            <li>Greenupp Weather</li>
                            <li>Greenupp Social</li>
                            <li>Greenupp Store</li>
                        </ul>
                    </div>
               </div>
               <div className="divider h-0.5 w-full bg-gray-300 md:hidden"></div>
               <div className="">
                    <div onClick={()=>{
                        //    alert('Collapse')
                        if(collapse==0){
                            setCollapse(3);
                        }
                        else{
                            setCollapse(0);
                        }
                    }} className="font-bold flex items-center w-full justify-between py-2"><p>Account</p> <span className={`${collapse==3? 'transition duration-150 rotate-45 bg-gray-500 text-white p-2 rounded-full': 'transition duration-150 -rotate-45'} md:hidden`}><PlusIcon className="h-4 w-4 transition duration-150"/></span></div>
                    <div className={`${collapse==3? 'inline transition duration-150':'hidden transition duration-150'} w-full md:inline`}>
                        <ul className="space-y-3 px-2 md:px-0">
                            <li>Manage your account</li>
                            <li>Your Data</li>
                            <li>Login</li>
                            <li>Register</li>
                        </ul>
                    </div>
               </div>
               <div className="divider h-0.5 w-full bg-gray-300 md:hidden"></div>
               <div className="">
                    <div onClick={()=>{
                        //    alert('Collapse')
                        if(collapse==0){
                            setCollapse(4);
                        }
                        else{
                            setCollapse(0);
                        }
                    }} className="font-bold flex items-center w-full justify-between py-2"><p>Our Values</p> <span className={`${collapse==4? 'transition duration-150 rotate-45 bg-gray-500 text-white p-2 rounded-full': 'transition duration-150 -rotate-45'} md:hidden`}><PlusIcon className="h-4 w-4 transition duration-150"/></span></div>
                    <div className={`${collapse==4? 'inline transition duration-150':'hidden transition duration-150'} w-full md:inline`}>
                        <ul className="space-y-3 px-2 md:px-0">
                            <li>Accessibility</li>
                            <li>The Environment</li>
                            <li>Inclusion and Diversity</li>
                            <li>Supply Chain Transparency</li>
                            
                        </ul>
                    </div>
               </div>
               <div className="divider h-0.5 w-full bg-gray-300 md:hidden"></div>
               
           </div>

           <div className="flex space-x-3  items-center font-bold justify-center pt-0 py-5 -mt-1 lg:p-2 w-full lg:justify-end lg:px-52 bg-gray-200">
                   <GlobeAltIcon className="h-4 w-4"/> 
                <p>En</p>
                <p>|</p>
                <p>{country}</p>
            </div>
           
           <div className="flex py-5 space-x-2 bg-gray-800 text-gray-200 justify-center">
                <p>Greenupp &copy; {date}</p>
                <p>|</p>
                <p>Contact</p>
                <p>|</p>
                <p>News</p>
                <p>|</p>
                <p>Careers</p>
           </div>
        </footer>
    )
}

export default Footer
