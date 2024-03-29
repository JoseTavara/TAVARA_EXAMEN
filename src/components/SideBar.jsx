import React from 'react'

function SideBar() {
    return (
        <div>
        <div className="fixed left-0 top-0 w-64 h-full p-4 z-50 sidebar-menu bg-teal-700">
            <a href="#" className="flex items-center pb-4 border-b border-b-gray-600">
            <span className="text-lg font-bold text-white ml-3">DAD USS</span>
            </a>
            <ul className="mt-4">
            <li className="mb-1 group active">
                <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md bg-teal-950">
                <span className="text-sm">Dashboard</span>
                </a>
            </li>
            <li className="mb-1 group active">
                <a href="/propiedades/new" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md bg-teal-950">
                <span className="text-sm">Propiedades</span>
                </a>
            </li>
            </ul>
        </div>
        


        </div>
        
    )
}

export default SideBar