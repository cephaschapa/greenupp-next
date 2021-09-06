import {useRouter} from 'next/router'

function MenuItems({icon, title, route}) {
    const router = useRouter()
    return (
            <div onClick={()=>{router.push(route)}} flex className="flex flex-col items-center justify-center p-2 rounded-xl text-gray-100 text-sm bg-gradient-to-bl from-green-400 via-green-600 to-green-700">
                {icon}
                <p className="">{title}</p>
            </div>
    )
}

export default MenuItems
