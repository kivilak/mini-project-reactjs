import React from 'react'
import { items } from '../../assets/home/homeItem'

function HomeCard() {

    return (
        <>
            {
                items.map(item => (
                    <div key={item.name} className="my-10 hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] justify-items-center bg-white rounded-3xl w-72 h-96">
                        <img className="p-5 h-64" src={item.image} alt={item.name} />
                        <h1 className="px-10 py-10 font-quicksand font-bold text-2xl text-baker-yellow">{item.name}</h1>
                    </div>
                ))
            }
        </>
    )
}

export default HomeCard