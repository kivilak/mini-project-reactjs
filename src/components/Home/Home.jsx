import React from 'react'
import { useState, useEffect } from 'react'
import HomeCard from './HomeCard'

function Home() {
    const slider = ['bg-slider-1', 'bg-slider-2', 'bg-slider-3']
    const [index, setIndex] = useState(0)
    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(() =>
            setIndex((preIndex) => preIndex === slider.length - 1 ? 0 : preIndex + 1), 3000) //delay
        return () => {
            resetTimeout()
        }
    }, [index])


    return (
        <>
            <div>
                <div className={`${slider[index]} hidden sm:block justify-items-center transition-opacity duration-1000 bg-cover bg-center xl:h-[38rem] lg:h-[30rem] md:h-[25rem] sm:h-[20rem] bg-blend-darken bg-black/40 text-baker-yellow font-lobster text-header-text tracking-wide`}>
                    <div className="pt-20 w-3/5">
                        <h1 className="-z-10 text-left drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)]">Fresh ..</h1>
                        <h1 className="-z-10 text-center drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)]">Delicious ..</h1>
                        <h1 className="-z-10 text-right drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)]">Fast ..</h1>
                    </div>
                </div>
                <div className="animation-plus bg-body-color grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center py-10">
                    <HomeCard />
                </div>
            </div>
        </>
    )
}

export default Home