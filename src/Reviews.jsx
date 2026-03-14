import React from 'react';

const Reviews = () => {
    return (
        <div className='container mx-auto '>
           
           {/* about texts */}

            <div className='flex flex-col justify-between  lg:flex-row  pt-20'>

            <div className=' '>
                 <div className='bg-white text-black px-5 py-2 w-fit rounded-3xl'>Best Cocktails</div>
                <h3 className='text-6xl py-5  font-modern-negra max-w-xl'>
                    Where every detail <br /> matters -from muddle to garnish
                </h3>

        
            </div>

            <div>


             <p className='text-lg max-w-xl'>
                    Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                
                </p>

                <div className='flex flex-col'>
                    <div className='text-3xl pt-4 font-bold'>

                  <span className='text-5xl text-yellow-400 '> 4.5</span>/5

                    </div>
                    <p className='py-2'>more than +12000 customers</p>
                </div>

            </div>
                            
            </div>

            {/* about images */}

            {/* upper grid */}

            <div className='mt-10'>

            <div className='grid grid-cols-1  xl:grid-cols-12 gap-5 mb-5  md:px-0 px-5'>

            <div className='md:col-span-3'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt1.png" alt="grid-img-1" />
                </div>

            </div>
            <div className='md:col-span-6'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt2.png" alt="grid-img-2" />
                </div>

            </div>
            <div className='md:col-span-3'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt5.png" alt="grid-img-5" />
                </div>

            </div>




            </div>

            {/* bottom grid */}

            <div className='grid grid-cols-12 gap-5 mb-5 md:px-0 px-5'>
                
               <div className='md:col-span-7'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt3.png" alt="grid-img-3" />
                </div>

            </div>

               <div className='md:col-span-5'>
                <div className='rounded-3xl overflow-hidden h-72 relative'>
                    <img className='object-cover w-full h-full' src="/public/images/abt4.png" alt="grid-img-4" />
                </div>

            </div>

            </div>

            </div>

            <div className='h-dvh'></div>
        </div>
    );
};

export default Reviews;