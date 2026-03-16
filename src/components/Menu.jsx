import React, { useState } from 'react';
import { allCocktails } from '../../constants';

const Menu = () => {

    const [currentIndex, setCurrentIndex] = useState(0)



    const totalCocktails = allCocktails.length

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails

        setCurrentIndex(newIndex)

    }

    const getCocktailAt=(indexoffset)=>{
        return allCocktails[(currentIndex + indexoffset +totalCocktails) % totalCocktails]
    }

    const currentCocktail=getCocktailAt(0)
    const prevCocktail=getCocktailAt(-1)
    const nextCocktail=getCocktailAt(1)
    return (
        <section id='menu' aria-labelledby='menu-heading' className='relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient'>

            <h2 id='menu-heading' className='sr-only'>Cocktail Menu</h2>

            <nav className='grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto' aria-label='Cocktail-Navigation'>
                {
                    allCocktails.map((cocktail, index) => {
                        const isActive = index === currentIndex;
                        return (

                            <div className='md:text-3xl text-xl pb-2 cursor-pointer hover:text-yellow hover:border-yellow border-b transition-colors font-modern-negra text-center'>
                                <button key={cocktail.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`} onClick={() => goToSlide(index)}>
                                    {cocktail.name}


                                </button>
                            </div>
                        )
                    })
                }

            </nav>

            <div className='flex flex-col content justify-between items-center container mx-auto relative'>

                <div className='arrows flex items-center justify-between w-full absolute'>

                    <button  className='text-left  text-white hover:text-yellow cursor-pointer transition-colors max-w-36' onClick={()=> goToSlide(currentIndex-1)}>
                        <span className='text-3xl font-modern-negra leading-none hidden md:block'>{prevCocktail.name }</span>
                        <img src="/images/right-arrow.png" alt="" />

                    </button>

                    <button className='text-left  text-white hover:text-yellow cursor-pointer transition-colors max-w-36'  onClick={()=> goToSlide(currentIndex+1)}>
                        <span className='text-3xl font-modern-negra leading-none hidden md:block'>{nextCocktail.name }</span>
                        <img src="/images/left-arrow.png" alt="" />

                    </button>

                </div>

                <div className='cocktail'>
                    <img src={currentCocktail.image} alt="" className='object-contain'/> 

                </div>



            </div>
        </section>
    );
};

export default Menu;