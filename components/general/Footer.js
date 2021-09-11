import { ChevronDownIcon, PlusIcon } from "@heroicons/react/outline";
import {useState} from 'react'
function Footer() {
    let [collapse, setCollapse] = useState(0)

    // collapse handler
    const collapseHandler = () => {
        setCollapse(true)
    }
    let date =  new Date().getFullYear();
    return (
        <footer className="-mt-1">
           <div className="bg-gray-200 py-5 p-2 space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-52">
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
                            <li>IoT Data Capture and Analytics</li>
                            <li>Blockchain and Supply Chain Monitoring</li>
                            <li>Crop Disease Diagnose, Prescription and Treatment</li>
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
