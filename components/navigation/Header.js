import Image from 'next/image'
import { MenuAlt4Icon } from '@heroicons/react/outline'
function Header() {
    return (
        <header className="flex h-20 w-full bg-white shadow-md items-center p-3 justify-between">
            <div className="w-48 relative h-full">
                <Image src="/logo.png" layout="fill"/>
            </div>
            <div className="">
                <MenuAlt4Icon className="h-8 w-8 text-gray-500"/>
            </div>
        </header>
    )
}

export default Header
