import React from 'react';
import { cocktailLists, mockTailLists } from '../constants';
import bgimg from '../public/images/noise.png'

const Cocktails = () => {
    return (
        <section style={{backgroundImage:`url(${bgimg})`}} className='relative justify-between  z-20 flex  mx-auto flex-col w-full overflow-hidden min-h-dvh  md:flex-row md:px-16 lg:px-45 pt-60 '>

            <div className='flex flex-col gap-4 '>

                <div className='text-xl'>Most Popular Cocktails:</div>

                <div>
                    <ul>
                      {
                        cocktailLists.map(({name, country, detail, price})=>(
                            <li>
                                <div className='my-6 flex w-75 justify-between'>
                                    <div>
                                         <h3 className='text-3xl 
                                         text-amber-300
                                         font-modern-negra '>{name}</h3>
                                    <div>{country} | {detail}</div>
                                    </div>
                                    <div>
                                        -{price}
                                    </div>
                                   

                                </div>
                            </li>
                        ))
                      }
                    </ul>
                </div>


            </div>

            <div className='flex flex-col gap-3 '>

                <div className='text-xl'>Most Loved Cocktails:</div>

                <div>
                    <ul>
                      {
                        mockTailLists.map(({name, country, detail, price})=>(
                            <li>
                                <div className='my-6 flex w-75 justify-between '>
                                    <div>
                                         <h3 className='text-3xl 
                                         text-amber-300
                                         font-modern-negra '>{name}</h3>
                                    <div>{country} | {detail}</div>
                                    </div>
                                    <div>
                                        -{price}
                                    </div>
                                   

                                </div>
                            </li>
                        ))
                      }
                    </ul>
                </div>


            </div>
            
        </section>
    );
};

export default Cocktails;