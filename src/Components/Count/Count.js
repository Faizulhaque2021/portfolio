import React from 'react';
import './Count.css'

const Count = () => {
    return (
		<section className='p-6 my-6 dark:bg-gray-800 dark:text-gray-100'>
			<div class="mx-5 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
			  <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-800 bg-opacity-40 backdrop-blur-md transition-all ease-in aos-init aos-animate" data-aos="zoom-in-right">
					<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-red-500">
						<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-9 w-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
							<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
							<path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path>
							<path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5"></path>
							<path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path>
							<path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"></path>
						</svg>
					</div>
				 <div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leadi">
						<span>282</span>+
					</p>
					<p class="capitalize aos-init aos-animate" data-aos="fade-right">Total Visited</p>
				</div>
		    </div>

		<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-800 bg-opacity-40 backdrop-blur-md transition-all ease-in aos-init aos-animate" data-aos="zoom-in">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-red-500">
					<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-9 w-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
						<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
						<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
					</svg>
			</div>
			<div class="flex flex-col justify-center align-middle">
					<p class="text-3xl font-semibold leadi">
						<span>98</span>+
					</p>
					<p class="capitalize aos-init aos-animate" data-aos="fade-right">Resume Download</p>
			</div>
	   </div>

	  <div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-800 bg-opacity-40 backdrop-blur-md transition-all ease-in aos-init aos-animate" data-aos="zoom-in">
			<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-red-500">
				<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="h-9 w-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path>
					<path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path>
					<path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path>
					<path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor"></path>
				</svg>
			</div>
			<div class="flex flex-col justify-center align-middle">
		    	<p class="text-3xl font-semibold leading">
				<span>5</span>+
				</p>
				<p class="capitalize aos-init aos-animate" data-aos="fade-right">Total projects</p>
			</div>
	 </div>

	<div class="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-slate-800 bg-opacity-40 backdrop-blur-md transition-all ease-in aos-init aos-animate" data-aos="zoom-in-left">
		<div class="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-red-500">
			<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="h-9 w-9" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
				<path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path>
			</svg>
		</div>
		<div class="flex flex-col justify-center align-middle">
			<p class="text-3xl font-semibold leading">
				<span>5</span>+
			</p>
			<p class="capitalize aos-init aos-animate" data-aos="fade-right">Total Blogs</p>
	   </div>
 	</div>
 </div>		
</section>
	)
};

export default Count;