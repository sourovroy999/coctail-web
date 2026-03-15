import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import React from 'react';



const About = () => {

    // useGSAP(()=>{

    //     const titleSplit=SplitText.create('#cocktail-heading', {
    //         type:'words'
    //     })
        
    //     const scrollTimeline=gsap.timeline({
    //         scrollTrigger:{
    //             trigger:'#about',
    //             start:'top center',
    //             markers:true,
    //         }
            
    //     })

    //     scrollTimeline
    //     .from(titleSplit.words, {
    //         opacity:0,
    //         duration:1,
    //         yPercent:60,
    //         ease:'expo.out',
    //         stagger:0.02,
    //         // yoyo:true,
    //         // repeat:-1,
    //     })
    //     .from('.top-grid div , .bottom-grid div', {
    //            opacity:0,
    //         duration:1,
    //         yPercent:100,
    //         ease:'power1.inOut',
    //         stagger:0.02,
    //         //  yoyo:true,
    //         // repeat:-1,
    //     }, '-=0.5')



    // })

    useGSAP(()=>{

        const paraSplit=SplitText.create('#para', {
            type:'lines'
        })

        gsap.set('#bc', {
            opacity:0,
            x:100
        })
       

        const tl=gsap.timeline({
            scrollTrigger:{
                trigger:'#about',
                start:'top 50%',
                markers:true,

            }
        })

         tl.to('#bc', {
            // y:-100,
            x:0,
            duration:1,
            opacity:1,
            // repeat:-1,

        })
        .fromTo('#cocktail-heading', {
            y:60,
            opacity:0
        }, {
            y:0,
            opacity:1,
        },'<=0.5'
        

    )
    .from(paraSplit.lines, {
        yPercent:100,
        opacity:0,
        duration:1,
        stagger:0.1,
        ease:'expo.out'
    }, '-=0.2')
    .from('#rating', {
        yPercent:60,
        opacity:0,
        duration:1
    }, '<')

    

    })


    return (
        <div id='about' className='container mx-auto '>
           
           {/* about texts */}

            <div className='flex flex-col justify-between  lg:flex-row  pt-20'>

            <div  className=' '>
                 <div id='bc' className='bg-white text-black px-5 py-2 w-fit rounded-3xl'>Best Cocktails</div>
                <h3 id='cocktail-heading' className='text-6xl py-5  font-modern-negra max-w-xl'>
                    Where every detail <br /> matters -from muddle to garnish
                </h3>

        
            </div>

            <div>


             <p id='para' className='text-lg max-w-xl'>
                    Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                
                </p>

                <div id='rating' className='flex flex-col'>
                    <div className='text-3xl pt-4 font-bold'>

                  <span className='text-5xl text-yellow-400 '> 4.5</span>/5

                    </div>
                    <p className='py-2'>more than +12000 customers</p>
                </div>

            </div>
                            
            </div>

            {/* about images */}

            {/* upper grid */}

            <div id='img-section' className='mt-10'>

            <div className='grid grid-cols-1  xl:grid-cols-12 gap-5 mb-5 top-grid md:px-0 px-5'>

            <div id='img'  className='md:col-span-3'>
                
                <div  className='rounded-3xl overflow-hidden h-72 relative  '>
                    <img  className='object-cover w-full h-full' src="/public/images/abt1.png" alt="grid-img-1" />
                    <img  className='absolute inset-0 object-cover w-full h-full ' src="/public/images/noise.png" alt="" />
                </div>

            </div>
            <div id='img'  className='md:col-span-6'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full inset-0' src="/public/images/abt2.png" alt="grid-img-2" />
                    <img  className='absolute inset-0 object-cover w-full h-full ' src="/public/images/noise.png" alt="" />
                </div>

            </div>
            <div id='img'  className='md:col-span-3'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt5.png" alt="grid-img-5" />
                    <img  className='absolute inset-0 object-cover w-full h-full ' src="/public/images/noise.png" alt="" />
                </div>

            </div>




            </div>

            {/* bottom grid */}

            <div className='grid grid-cols-12 bottom-grid gap-5 mb-5 md:px-0 px-5'>
                
               <div className='md:col-span-7'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt3.png" alt="grid-img-3" />
                    <img  className='absolute inset-0 object-cover w-full h-full ' src="/public/images/noise.png" alt="" />
                </div>

            </div>

               <div className='md:col-span-5'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt4.png" alt="grid-img-4" />
                    <img  className='absolute inset-0 object-cover w-full h-full ' src="/public/images/noise.png" alt="" />
                </div>

            </div>

            </div>

            </div>

        </div>
    );
};

export default About;