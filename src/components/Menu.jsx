import React, { useRef, useState } from 'react';
import { allCocktails } from '../../constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {

    const contentRef = useRef()

    const [currentIndex, setCurrentIndex] = useState(0)


    useGSAP(()=>{

        gsap.fromTo("#title",
             {opacity:0},
              {opacity:1, duration:1}
            )


        gsap.fromTo(".cocktail img", {
            opacity:0,
            xPercent:-100
        }, 
        {
            xPercent:0,
            opacity:1,
            duration:1,
            ease:'power1.inOut'
        }
        )

        gsap.fromTo('.details h2', {
            yPercent:100,
            opacity:0
        }, 
    {
        yPercent:0,
        opacity:100,
        ease:'power1.inOut'
    })
        gsap.fromTo('.details p', {
            yPercent:100,
            opacity:0
        }, 
    {
        yPercent:0,
        opacity:100,
        ease:'power1.inOut'
    })




    }, [currentIndex])


    const totalCocktails = allCocktails.length

    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails

        setCurrentIndex(newIndex)

    }

    const getCocktailAt = (indexoffset) => {
        return allCocktails[(currentIndex + indexoffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCocktailAt(0)
    const prevCocktail = getCocktailAt(-1)
    const nextCocktail = getCocktailAt(1)
    return (
        <section id='menu' aria-labelledby='menu-heading' className='relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-20 radial-gradient'>

            <h2 id='menu-heading' className='sr-only'>Cocktail Menu</h2>

            <nav className='cocktail-tabs grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-32 mb-20 relative z-10 md:max-w-6xl md:mx-auto' aria-label='Cocktail-Navigation'>
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

            <div className='flex content flex-col content justify-between items-center container mx-auto relative'>

                <div className='arrows flex items-center justify-between w-full absolute'>

                    <button className='text-left  text-white hover:text-yellow cursor-pointer transition-colors max-w-36' onClick={() => goToSlide(currentIndex - 1)}>
                        <span className='text-3xl font-modern-negra leading-none hidden md:block'>{prevCocktail.name}</span>
                        <img src="/images/right-arrow.png" alt="" />

                    </button>

                    <button className='text-left  text-white hover:text-yellow cursor-pointer transition-colors max-w-36' onClick={() => goToSlide(currentIndex + 1)}>
                        <span className='text-3xl font-modern-negra leading-none hidden md:block'>{nextCocktail.name}</span>
                        <img src="/images/left-arrow.png" alt="" />

                    </button>

                </div>

                <div className='cocktail flex justify-center items-center mt-10'>
                    <img src={currentCocktail.image} alt="" className='object-contain h-[60vh]' />

                </div>

                <div className="recipe flex max-md:flex-col gap-10 md:items-center justify-between w-full lg:absolute bottom-0">
                    <div ref={contentRef} className='info space-y-4 lg:translate-y-20'>
                        <p>Recepe for:</p>
                        <p className='font-modern-negra md:text-6xl text-3xl text-yellow max-w-40' id='title'>{currentCocktail.name}</p>

                    </div>

                    <div className="details  space-y-5 md:max-w-md text-left">
                        <h2 className='md:text-5xl text-3xl font-serif'>{currentCocktail.title}</h2>
                        <p className=' md:text-lg pe-5'>{currentCocktail.description}</p>
                    </div>
                </div>







            </div>
        </section>
    );
};

export default Menu;