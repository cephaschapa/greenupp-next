import { QuestionMarkCircleIcon } from "@heroicons/react/outline"

function MenuItems({icon, title}) {
    return (
            <div flex className="flex flex-col items-center justify-center border-2 border-white p-2 rounded-2xl text-gray-100 text-sm">
                {icon}
                <p className="">{title}</p>
            </div>
    )
}

export default MenuItems
