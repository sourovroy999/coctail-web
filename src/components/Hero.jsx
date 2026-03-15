import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import bgimg from '../../public/images/noise.png'

const Hero = () => {

    
    const videoRef = useRef()

    const isMobile=useMediaQuery({maxWidth:767});

    useGSAP(()=>{
        
    const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";

    
    let tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
        
		end: endValue,
		scrub: true,
		pin: true,
        // markers:true,
	 },
	});

    
	videoRef.current.onloadedmetadata = () => {
	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
	};

    }, [])

    return (
        <>
            <section id='hero' style={{backgroundImage:`url(${bgimg})`}} className='absolute   inset-0 size-full '>
                <div className='absolute -left-7 md:top-20 top-50'>
                    <img src="/public/images/cocktail-left-leaf.png" alt="" />

                </div>


                <div className='absolute -right-23 md:top-60 top-20 '>
                    <img src="/public/images/cocktail-right-leaf.png" alt="" />

                </div>


                <h1 className='text-center font-modern-negra text-8xl md:text-[20vw] leading-none pt-30 '>MOJITO</h1>

                {/* body */}


                <div className='lg:container mx-auto absolute left-1/2 -translate-x-1/2 lg:bottom-20
                  md:top-[35vh]   flex  justify-between flex-col lg:flex-row lg:items-end px-5;'>


                    <div >
                        <div className='py-6'>Cool. Crisp. Classic</div>
                        <div className="text-amber-200 font-modern-negra text-5xl">Sip the Spirit <br /> of Summer</div>
                    </div>

                    <div className=' w-sm   '>
                        Every cocktail on our menu is a blend
                        of premium ingredients, creative flair,
                        and timeless recipes — designed to
                        delight your senses.

                        <div className='text-md my-2 font-medium'>
                            View Coctails
                        </div>
                    </div>

                </div>




                <div>

                </div>
            </section>

          
                <video
                    ref={videoRef}
                    className='w-full md:h-[80%] h-1/2 absolute bottom-0  left-0 md:object-contain object-bottom object-cover'
                    muted
                    playsInline
                    preload='auto'
                    // autoPlay
                    src="/videos/output.mp4"></video>
        

        </>
    );
};

export default Hero;