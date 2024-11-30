import React, { useState } from 'react'
import products from '../../assets/product/productItem'

function Product() {
    const iconSize = "25";

    const [numOfProducts, setNumOfProducts] = useState(4);

    function loadMore() {
        setNumOfProducts((preProducts) => preProducts + 4)
        console.log(numOfProducts, products.length, showProducts.length);
    }

    const showProducts = products.slice(0, numOfProducts);

    return (
        <>
            <div className="bg-body-color grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
                {
                    showProducts.map(product => (
                        <div key={product.name} className="px-5 my-10 hover:drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)] justify-items-center bg-white rounded-3xl w-card-width h-96">
                            <img className="p-5 h-3/5" src={product.image} alt={product.name} />
                            <h1 className="px-5 py-3 font-quicksand text-center font-bold text-lg text-baker-yellow">{product.name}</h1>
                            <h1 className="px-10 font-quicksand text-center font-semibold text-base">Rs: {product.price}</h1>
                            <div className="w-full justify-evenly">
                                <button className="rounded-l-full bg-baker-yellow hover:bg-hoverAddBTN btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                                    </svg>
                                </button>
                                <button className="rounded-r-full bg-baker-orange hover:bg-hoverRemoveBTN btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} fill="currentColor" class="bi bi-cart-x" viewBox="0 0 16 16">
                                        <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="bg-body-color text-center pt-0 pb-10">
                <button className="loadMoreBtn" onClick={loadMore}>
                    Load More
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                    </svg> */}
                </button>
            </div>
        </>
    )
}

export default Product