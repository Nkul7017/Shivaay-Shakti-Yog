import React from 'react'

function Services() {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex  py-24 md:flex-row flex-col items-center lg:px-44 ">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
                        <h1 className="title-font text-xl  font-medium text-yellow-600">OUR SERVICES</h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Specializations
                        </h1>
                        <p className="mb-8 leading-relaxed w-[60%]">Our online portal is a breakthrough in the Yogic World making Yoga Counselling and services accessible to everyone around the world.</p>
                        {/* <div className=" justify-center">
                            <button className="inline-flex text-white bg-[#293241] rounded-full border-0 py-2 px-6 focus:outline-none  text-lg">Learn More
                            </button> 
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-[#293241] hover:text-white rounded-full text-lg">Request Trial</button>
                        </div> */}
                          <button className=" text-white bg-[#293241] rounded-full border-0 py-2 px-6 focus:outline-none  text-lg">Learn More
                            </button> 
                            <button className=" mt-5  text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-[#293241] hover:text-white rounded-full text-lg">Request Trial</button>
                    </div>
                    <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="img/ser.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services