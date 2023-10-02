import React from "react";
import helping from "../../public/helping.png";
function  Helping() {
  return (
    <div className=" grid  lg:grid-cols-2 w-[80vw] h-[900px] sm:h-[700px] mx-auto    sm:mt-10  sm:space-y-0 mb-8 ">
      <div className={` row-start-2 sm:row-auto my-2 sm:my-auto space-y-2  rounded-xl  `} >
        <div className=" space-y-2 sm:w-[70%] -ml-2 sm:-ml-0 flex flex-col gap-1.5 ">
          <div className=" "> 
          <p className=" text-2xl heading ">Why Choose</p>
          <p className=" text-4xl heading mt-1 ">Shivaay Shakti ?</p>
          </div>
          {/* <h1 className=" text-md sm:text-2xl heading ">
          For The Betterment of Humanity
          </h1> */}
          <p className="text-md leading-6 para   ">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, sequi! Molestiae voluptatum itaque, exercitationem voluptate vitae deserunt fugiat perspiciatis sequi maxime aperiam est voluptas sed blanditiis quam, nostrum officiis sint.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nobis eligendi officiis numquam. Fugit rerum nam labore dolores deserunt. Suscipit aut quas perferendis sapiente blanditiis, adipisci at dicta dolor necessitatibus?
          </p>
        </div>
      </div>
      <div className=" row-start-1 -ml-2 sm:ml-0 w-[84vw] mx-auto sm:w-auto sm:row-auto grid sm:place-content-center mt-10 sm:mt-0  ">
        <img
          src={helping}
          className=" h-[400px]  sm:w-[694px] sm:h-[550px]  object-cover "
          alt=""
          style={{
            borderRadius: "10px",
            boxShadow:
              "0px 4px 4px 0px rgba(0, 0, 0, 0.25);Rectangle 43Image · 867 x 1,3001x",
          }}
        />
      </div>
    </div>
  );
}

export default Helping;
