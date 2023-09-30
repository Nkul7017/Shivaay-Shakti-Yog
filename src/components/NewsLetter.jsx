import React from 'react'

function NewsLetter() {
    return (
        <div>
            <div className="newsbg h-80 rounded-2xl ">
                <div className="news py-24 md:flex  justify-around align-middle items-center " >
                    <div className="left">
                        <h1 className="text-xl font-extrabold title-font text-yellow-600">Follow Shivay Shakti
                        </h1>
                        <h1 className="sm:text-[40px] text-2xl font-extrabold title-font text-gray-100 mb-10">Our Newsletter
                        </h1>
                    </div>
                    <div className="right">
                        <form>
                            <div className="flex">
                                <div className="relative w-full">
                                    <input type="search" placeholder="Your Email" id="location-search&quot;" className="block p-2.5 w-full md:w-[30em] z-20 text-sm  rounded-full border-2 border-gray-100    bg-transparent dark:border-l-gray-700 outline-none dark:border-gray-600 dark:placeholder-gray-400 text-white outline" required />
                                    <button type="submit" className="outline-none absolute top-0 right-0 p-[11.7px] text-sm font-medium text-black bg-white rounded-r-full ffocus:outline-none ">
                                        <h1>Submit Button</h1>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter