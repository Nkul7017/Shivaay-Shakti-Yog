import React from 'react'
import NewsLetter from './NewsLetter'
import Rate from './Rate'

function Clients() {
    return (
        <div className=' mt-24'>

            <div className="clientbg ">
                {/* <div className="  container px-4 mx-auto -mt-40">
                    <NewsLetter />
                </div> */}
                <section className="text-gray-600 body-font ">
                    <div className="container px-5 py-24 mx-auto">
                        <h1 className="text-xl font-medium title-font text-[#FAA200] mb-12 text-center">Our Testimonials</h1>
                        <h1 className="text-3xl font-medium title-font text-black mb-12 text-center">What Client Say
                        </h1>
                        <div className="flex flex-wrap -m-4">
                            
                            <div className="p-4 md:w-1/3 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded-2xl shadow-2xl">
                                    <Rate className />
                                    <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://kitpro.site/groweal/wp-content/uploads/sites/63/2022/01/woman-with-smoothie-drinks-2021-12-11-01-17-20-utc.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                            <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                        </span>
                                    </a>
                                </div>

                                
                            </div>

                            <div className="p-4 md:w-1/3 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded-2xl shadow-2xl">
                                    <Rate className />
                                    <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://kitpro.site/groweal/wp-content/uploads/sites/63/2022/01/woman-with-smoothie-drinks-2021-12-11-01-17-20-utc.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                            <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                        </span>
                                    </a>
                                </div>

                                
                            </div>


                            <div className="p-4 md:w-1/3 w-full">
                                <div className="h-full bg-gray-100 p-8 rounded-2xl shadow-2xl">
                                    <Rate className />
                                    <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                    <a className="inline-flex items-center">
                                        <img alt="testimonial" src="https://kitpro.site/groweal/wp-content/uploads/sites/63/2022/01/woman-with-smoothie-drinks-2021-12-11-01-17-20-utc.jpg" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                        <span className="flex-grow flex flex-col pl-4">
                                            <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
                                            <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                        </span>
                                    </a>
                                </div>

                                
                            </div>
                         
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Clients