import React from 'react';
import { useRef } from 'react';
import  emailjs from '@emailjs/browser';


 export const Contact = () => {
const form = useRef(); 
const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_8chhuok', 'template_zhmjiog', form.current, 'aRfL1WdSHZYmcUbUh')
      .then((result) => {
          console.log('Email Send!', result.status ,result.text);
      }, (error) => {
          console.log('FAILED...', error.text);
      });
    }  
    return (
    <div id="contact shadow-xl">
        <section class="py-20 relative contact aos-init aos-animate" id="contact" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
           <h1 data-aos="fade-up" class="text-4xl text-center font-bold text-orange-600 my-10 uppercase titlehead aos-init aos-animate">Contact</h1>
            <div class="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative aos-init aos-animate" data-aos="fade-right">
                    <iframe  data-aos="fade-up" width="100%" height="100%" title="map" class="absolute inset-0 aos-init aos-animate" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1226564823546!2d90.4270383739901!3d23.77864618769391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b9cfaddef5%3A0xdda72574ad125cd9!2sMiddle%20Badda%20Bazar!5e0!3m2!1sen!2sbd!4v1699626276328!5m2!1sen!2sbd" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div class="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md mx-5 mt-10">
                                <div class="lg:w-1/2 px-6">
                                    <h2 class="title-font font-semibold tracking-widest text-xs aos-init aos-animate" data-aos="fade-right">ADDRESS</h2>
                                    <p class="mt-1 aos-init aos-animate" data-aos="fade-right">Middle Badda Bazar Road,<br/> Dhaka-1212, Bangladesh</p>
                                </div>
                        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                               <h2 class="title-font font-semibold text-white tracking-widest text-xs aos-init aos-animate" data-aos="fade-right">EMAIL</h2>
                               <a href="mailto:Faizulhaque2021@gmail.com" class="text-red-400 leading-relaxed cursor-pointer aos-init" data-aos="fade-right">Faizulhaque2021@gmail.com</a>
                               <h2 class="title-font font-semibold text-white tracking-widest text-xs mt-4 aos-init" data-aos="fade-right">PHONE</h2>
                               <a href="tel:+8801713627446" class="text-red-400 leading-relaxed cursor-pointer aos-init" data-aos="fade-right">+8801713627446</a>
                        </div>
                        </div>
                    </div>
                <div class="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 aos-init aos-animate" data-aos="fade-right">
                            <h2 class="text-white text-4xl mb-1 font-medium title-font aos-init aos-animate" data-aos="fade-right">Get in touch</h2>
                            <p class="leading-relaxed mb-5 aos-init aos-animate" data-aos="fade-right">Fill in the form to start a conversation</p>
                    <form ref={form} onSubmit={sendEmail} class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                            <div class="relative mb-4">
                                <label for="name" class="leading-7 text-sm text-gray-400 aos-init aos-animate" data-aos="fade-right">Name</label>
                                <input type="text" id="name" name="user_name" required="" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out aos-init aos-animate" data-aos="fade-right"/>
                            </div>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-400 aos-init aos-animate" data-aos="fade-right">Email</label>
                                <input type="email" id="email" name="user_email" required="" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out aos-init aos-animate" data-aos="fade-right"/>
                            </div>
                             <div class="relative mb-4">
                                <label for="message" class="leading-7 text-sm text-gray-400 aos-init aos-animate" data-aos="fade-right">Message</label>
                                <textarea id="message" name="message" required="" class="w-full bg-gray-800 rounded border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out aos-init aos-animate" data-aos="fade-right"></textarea>
                            </div>
                       <button class="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg aos-init" data-aos="fade-up" type="submit" value="Send">Submit</button>
                 </form>
                        <p class="text-xs text-gray-400 text-opacity-90 mt-3 aos-init" data-aos="fade-right">*Feel free to contact with me.</p>
                </div>
          </div>
        </section>
   </div>
    );
};


export default Contact;