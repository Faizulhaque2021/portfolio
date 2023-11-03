import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='shadow-xl'>
                     <div class="my-10">
                            <h1 class="text-4xl text-center text-orange-600 font-bold uppercase titlehead aos-init aos-animate" data-aos="fade-right">Services</h1>
                            <p class="text-xl text-center text-white font-semibold mt-5 aos-init aos-animate" data-aos="fade-left">Offer for Clients</p>
                     </div>
            <section class="flex flex-col items-center max-w-7xl max-auto px-6 my-5 text-white aos-init aos-animate" data-aos-anchor-placement="top-bottom" data-aos="fade-right">
                <div class="my-16 flex flex-col md:flex-row justify-around items-center gap-5">
                    <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-90">
                        <div class="card glass max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="{}">
                            <figure><img class="w-full rounded-t" src="https://i.ibb.co/8Y8sF8G/aspnet-featured.png w=300" alt="Sunset in the mountains"/></figure>
                                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </a>
                            <a href="{}" class="items-center font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                                <h5 class="mb-2 text-sm font-bold text-center tracking-tight text-gray-900 dark:text-white">Web Application Development</h5>
                            </a> 
                            <p class="text-gray-500 text-md"></p>
                      </div>
                   </div>
                  <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-90">
                        <div class="card glass max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                               <a href="{}">
                               <figure><img class="w-full rounded-t" src="https://i.ibb.co/VjPpSLn/Mern.jpg w=500" alt="Sunset in the mountains"/></figure>
                                     <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                               </a>
                               <a href="{}" class="font-semibold text-lg text-center inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                                    <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Web Development</h5>
                               </a>
                               <p class="text-gray-500 text-sm"></p>
                        </div>
                 </div>
                 <div class="transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:rotate-90">
                            <div class="card glass max-w-sm bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="{}" class="rounded-t-lg">
                                <figure><img class="w-full" src="https://i.ibb.co/PWZBJpY/AWS.jpg w=500" alt="Sunset in the mountains"/></figure>
                                <div class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                               </a>
                               <a href="{}" class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                                <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Amazon Web Service</h5>
                               </a>
                              <p class="text-gray-500 text-md"></p>
                        </div>
                        <div class="flex items-center justify-between"></div>
                </div>
   
                        <div class="card card-side bg-base-100 shadow-xl"></div>
        </div>
    </section>
     </div>
    );
};

export default Services;