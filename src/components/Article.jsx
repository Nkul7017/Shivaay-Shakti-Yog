import helping from "../../public/newsart.png";
import Flickity from "react-flickity-component";
export default function Article() {
  const flickityOptions = {
    initialIndex: 2,
    autoPlay: 3500,
    pauseAutoPlayOnHover: true,
    wrapAround: true,
    prevNextButtons: true,
    pageDots: false,
    cellAlign: "center",
    freeScroll: true,
    selectedAttraction: 0.005,
    draggable: false,
    friction: 0.23,
  };

  return (
    <div className=" w-[100vw] sm:w-[93vw] mx-auto overflow-scroll pt-12   scrollbar-hide  ">
      <h1 className=" pl-8 sm:pl-28 heading text-4xl  sm:pt-8 pb-10  sm:pb-16  ">
        News and Articles
      </h1>
      <Flickity
        touch-action={"none"}
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions} 
      >
        
        <div className="carousel-cell h-[400px] w-[88vw] sm:w-[70vw] mx-12 relative overflow-hidden">
          <div className="absolute w-[100%] md:w-[50%] rounded-2xl h-[99%] left-0 top-0 bg-[#4CAF7440] text-white grid place-content-center ">
            <div className=" w-[80%] sm:w-[70%] mx-auto space-y-2 sm:space-y-6">
              <p className="text-4xl ">Sale ! Sale ! Sale !</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti aut cumque molestiae voluptatibus soluta consequatur
                alias dolorem. Ex minima error voluptas explicabo provident,
                tempore ipsam repudiandae molestias voluptate ipsa inventore.
              </p>
            </div>
          </div>
          <img
            src={helping}
            alt=""
            className="h-[400px] w-[70vw] object-cover   rounded-2xl "
          />
        </div>
        <div className="carousel-cell h-[400px] w-[88vw] sm:w-[70vw] mx-12 relative overflow-hidden">
          <div className="absolute w-[100%] md:w-[50%] rounded-2xl h-[99%] left-0 top-0 bg-[#2C3E5040]  text-white grid place-content-center ">
            <div className=" w-[80%] sm:w-[70%] mx-auto space-y-2 sm:space-y-6">
              <p className="text-4xl ">Sale ! Sale ! Sale !</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti aut cumque molestiae voluptatibus soluta consequatur
                alias dolorem. Ex minima error voluptas explicabo provident,
                tempore ipsam repudiandae molestias voluptate ipsa inventore.
              </p>
            </div>
          </div>
          <img
            src={helping}
            alt=""
            className="h-[400px] w-[70vw] object-cover   rounded-2xl "
          />
        </div>
        <div className="carousel-cell h-[400px] w-[88vw] sm:w-[70vw] mx-12 relative overflow-hidden">
          <div className="absolute w-[100%] md:w-[50%] rounded-2xl h-[99%] left-0 top-0 bg-[#4CAF7440]  text-white grid place-content-center ">
            <div className=" w-[80%] sm:w-[70%] mx-auto space-y-2 sm:space-y-6">
              <p className="text-4xl ">Sale ! Sale ! Sale !</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti aut cumque molestiae voluptatibus soluta consequatur
                alias dolorem. Ex minima error voluptas explicabo provident,
                tempore ipsam repudiandae molestias voluptate ipsa inventore.
              </p>
            </div>
          </div>
          <img
            src={helping}
            alt=""
            className="h-[400px] w-[70vw] object-cover   rounded-2xl "
          />
        </div>
        <div className="carousel-cell h-[400px] w-[88vw] sm:w-[70vw] mx-12 relative overflow-hidden">
          <div className="absolute w-[100%] md:w-[50%] rounded-2xl h-[99%] left-0 top-0 bg-[#2C3E5040]  text-white grid place-content-center ">
            <div className=" w-[80%] sm:w-[70%] mx-auto space-y-2 sm:space-y-6">
              <p className="text-4xl ">Sale ! Sale ! Sale !</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corrupti aut cumque molestiae voluptatibus soluta consequatur
                alias dolorem. Ex minima error voluptas explicabo provident,
                tempore ipsam repudiandae molestias voluptate ipsa inventore.
              </p>
            </div>
          </div>
          <img
            src={helping}
            alt=""
            className="h-[400px] w-[70vw] object-cover   rounded-2xl "
          />
        </div>
      
      </Flickity>
    </div>
  );
}
