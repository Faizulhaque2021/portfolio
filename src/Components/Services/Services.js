import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='shadow-xl'>
                     <div class="my-10">
                            <h1 class="text-4xl text-center text-orange-600 font-bold uppercase titlehead aos-init aos-animate" data-aos="fade-right">Services</h1>
                            <p class="text-xl text-center text-white font-semibold mt-2 aos-init aos-animate" data-aos="fade-left">Offer for Clients</p>
                     </div>
            <section class="flex flex-col items-center max-w-7xl max-auto px-6 my-5 text-white aos-init aos-animate" data-aos-anchor-placement="top-bottom" data-aos="fade-right">
                <div class="my-16 flex flex-col md:flex-row justify-around items-center gap-10">
                    <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white transition duration-300 hover:-translate-y-1 shadow-xl">
                        <div class="card glass max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <figure><img class="h-50 w-72 object-cover rounded-t-xl" src="https://i.ibb.co/8Y8sF8G/aspnet-featured.png w=300" alt=''/></figure>
                                            <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                                </div>
                                <div class="text-sm items-center hover:text-indigo-500 transition duration-500 ease-in-out">
                                        <div class="text-md font-bold text-black truncate block capitalize"><strong>WEB APPLICATION DEVELOPMENT</strong></div>
                                        <div class="text-md font-semibold text-black cursor-auto my-2">$10 Hour</div>
                                </div> 
                        </div>
                   </div>
                  <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white transition duration-300 hover:-translate-y-1 shadow-xl">
                        <div class="card glass max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                               <div>
                                    <figure><img class="h-50 w-72 object-cover rounded-t-xl" src="https://i.ibb.co/VjPpSLn/Mern.jpg w=500" alt=""/></figure>
                                        <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                               </div>
                               <div class="text-sm items-center hover:text-indigo-500 transition duration-500 ease-in-out">
                                        <div class="text-md font-bold text-black truncate block capitalize"><strong>WEB DEVELOPMENT</strong></div>
                                        <div class="text-md font-semibold text-black cursor-auto my-2">$10 Hour</div>
                              </div>  
                        </div>
                 </div>
                 <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white transition duration-300 hover:-translate-y-1 shadow-xl">
                            <div class="card glass max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                                <div>
                                    <figure><img class="h-52 w-72 object-cover rounded-t-xl" src="https://i.ibb.co/9w9LLxv/amazon-600.jpg w=500" alt=""/></figure>
                                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                               </div>
                            </div>
                        <div class="text-sm items-center hover:text-indigo-500 transition duration-500 ease-in-out">
                                        <div class="text-md font-bold text-black truncate block capitalize"><strong>AMAZON WEB SERVICE</strong></div>
                       </div> 
                       <div class="flex items-center justify-between">
                        <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                     </div>
                </div>
            <div class="card card-side bg-base-100 shadow-xl"></div>
        </div>
    </section>
     </div>
    );
};

export default Services;