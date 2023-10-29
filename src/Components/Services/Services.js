import React from 'react';
import './Services.css'

const Services = () => {
    return (
        <div className='shadow-xl'>
           <div class="my-10">
              <h1 class="text-4xl text-center text-orange-600 font-bold uppercase titlehead aos-init aos-animate" data-aos="fade-right">Services</h1>
                   <p class="text-xl text-center text-white font-semibold mt-5 aos-init aos-animate" data-aos="fade-left">Offer for Clients</p>
          </div>
        <section class="max-w-7xl max-auto px-5 my-6 text-white aos-init aos-animate" data-aos-anchor-placement="top-bottom" data-aos="fade-right">
                <div class="my-16 flex flex-col md:flex-row justify-around items-center gap-12">
                    <div class="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl">
                            <img src='/src/Images/img-1.svg' alt='' class="w-[500px] mb-12 max-auto"/>
                            <h5 class="text-center my-5 text-xl">Web Application Development</h5>
                            <p class="text-justify">
                                * ASP NET MVC <br/>
                                * ASP NET CORE <br/>
                                * Using Clean Architecture. 
                            </p>
                    </div>
                    <div class="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl">
                            <img src='' alt='' class="w-[500px] mb-12 max-auto"/>
                            <h5 class="text-center my-5 text-xl">Web Development</h5>
                            <p class="text-justify">
                                * Complete Website Development <br/>
                                * Technology Using React   
                            </p>
                    </div>
                    <div class="w-[354px] px-5 py-8 rounded-lg border border-primary shadow-[#5dadec3b] cursor-pointer shadow-xl">
                            <img src='' alt='' class="w-[500px] mb-12 max-auto"/>
                            <h5 class="text-center my-5 text-xl">Amazon Web Service</h5>
                            <p class="text-justify">
                                lorem
                            </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;