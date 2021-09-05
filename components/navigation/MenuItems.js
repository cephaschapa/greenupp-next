import {useRouter} from 'next/router'

function MenuItems({icon, title, route}) {
    const router = useRouter()
    return (
            <div onClick={()=>{router.push(route)}} flex className="flex flex-col items-center justify-center border-2 font-bold border-white p-2 rounded-2xl text-gray-100 text-sm">
                {icon}
                <p className="">{title}</p>
            </div>
    )
}

export default MenuItems
