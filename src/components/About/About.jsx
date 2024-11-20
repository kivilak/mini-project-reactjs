import React from 'react'
import { img_slider_2 } from '../../assets/home/homeItem'

function About() {
    console.log(img_slider_2)
    return (
        <div className="bg-slider-2 bg-cover bg-center bg-blend-darken bg-black/40 justify-items-center py-10" >
            <div className="text-center bg-body-color pt-5 bg-opacity-70 lg:w-2/3 md:w-4/5 sm:w-4/6 lg:h-96 rounded-xl border border-body-color border-opacity-40">
                <h1 className="text-4xl font-bold text-baker-orange font-quicksand underline">Royal Bakers</h1>
                <h1 className="text-3xl font-semibold mt-5 text-baker-yellow font-quicksand">Our sweet story</h1>
                <p className="text-2xl mt-5 mx-10 mb-20">
                    We are Royal Bakers and we love baking cakes, bakes and desserts.
                    With this pure, sweet sentiment, we founded our company and opened our first bakery in colombo 07, 2004.
                    We are delighted to help our guests celebrate and spoil themselves everyday!
                    We offer an incredible range of baked treats.
                    Cupcakes, celebration cakes, brownies, pies, cheesecakes… or perhaps the Monthly Special? Honestly, we don't think you can go wrong.
                </p>
            </div>
        </div >
    )
}

export default About