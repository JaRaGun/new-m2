import { Link } from 'react-router-dom';
function Contents() {
    return (
        <div>
          {/* Content */}
            <div className="bg-white dark:bg-[#277BC0] overflow-hidden relative lg:flex lg:items-center">
                <div className="w-full py-12 px-4 sm:px-6 lg:py-10 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span className="block">
                            Welcome to SkyCast
                        </span>
                        <span className="Title block">
                            It&#x27;s Weather today or tomorrow.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 text-[#FFF4CF]">
                        Your daily dose of weather updates.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <Link to="app">
                            <button type="button" className="button rounded-lg py-4 px-6 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                                Get started
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <img src="/weather.gif" className="h-full max-w-1/2 lg:block right-0 top-0" alt='weather'/>
            </div>
 
            {/*Cards*/}
        
            <div id="animation-carousel" className="relative" data-carousel="static">
               
                <div className="relative h-56 overflow-hidden md:h-96">
                
                    <div className="duration-200 ease-linear" data-carousel-item="active">
                        <img src="/sunny.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                  
                    <div className="duration-200 ease-linear" data-carousel-item="active">
                        <img src="/cloudy.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                  
                    <div className="duration-200 ease-linear" data-carousel-item="active">
                        <img src="/rainy.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                 
                    <div className="duration-200 ease-linear" data-carousel-item="active">
                        <img src="/thunder.jpeg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
             
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

    </div>
    );}

export default Contents;