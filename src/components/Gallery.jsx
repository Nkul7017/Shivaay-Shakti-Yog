import React from "react";
import img1 from "../../public/helping.png";

function FourImg({data1}) {
  return (
    <div className=" flex flex-col gap-4">
      <div className="flex   gap-4 ">
        <div className="w-[300px] h-[200px]    self-end ">
          <img
            src={data1?.img1}
            alt="img"
            className=" w-[300px] h-[200px] rounded-lg object-cover self-end "
          />
        </div>
        <div className=" w-[200px] h-[300px]   ">
          <img
            src={data1?.img2}
            alt=""
            className=" w-[200px] h-[300px]  rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="flex  gap-4 ">
        <div className="w-[200px] h-[300px]     ">
          <img src={data1?.img3} alt="" className="w-[200px] h-[300px]  rounded-lg object-cover" />
        </div>
        <div className=" w-[300px] h-[200px]    ">
          <img
            src={data1?.img4}
            alt="img"
            className=" w-[300px] h-[200px] rounded-lg object-cover "
          />
        </div>
      </div>
    </div>
  );
}

function MainImg({data2}) {
  const img=data2;
  return (
    <div className="grid place-content-center px-2    ">
      <div className="w-[400px] h-[350px]  rounded-lg  ">
        <img src={img} alt="" className="w-[400px] h-[350px] rounded-lg object-cover " />
      </div>
    </div>
  );
}

function Gallery() {
  const data ={
   img0:{
    img1:"https://images.pexels.com/photos/13849063/pexels-photo-13849063.jpeg",
    img2:"https://images.pexels.com/photos/8980974/pexels-photo-8980974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img3:"https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img4:"https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   img1:{
    img1:"https://images.pexels.com/photos/3984340/pexels-photo-3984340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2:"https://images.pexels.com/photos/7353048/pexels-photo-7353048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img3:"https://images.pexels.com/photos/2035066/pexels-photo-2035066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img4:"https://images.pexels.com/photos/2597205/pexels-photo-2597205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   img2:{
    img1:"https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2:"https://images.pexels.com/photos/4151869/pexels-photo-4151869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img3:"https://images.pexels.com/photos/5386371/pexels-photo-5386371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img4:"https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
   },
   img3:{
    img1:"https://images.pexels.com/photos/3618721/pexels-photo-3618721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img2:"https://images.pexels.com/photos/348489/pexels-photo-348489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img3:"https://images.pexels.com/photos/2121068/pexels-photo-2121068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img4:"https://i.ytimg.com/vi/1-vwMJme5dM/maxresdefault.jpg"
   }
  }
  const data1 ={
   img0:"https://api.time.com/wp-content/uploads/2015/06/international-yoga-day-1.jpg",
   img1:"https://cdn.zeebiz.com/sites/default/files/2023/03/02/230060-giorgia-meloni-pti-1.jpg",
   img2:"https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  }
  console.log(data.img0)
  return (
    <>
    <div className="  flex flex-col gap-8 ">
    <div className="text-left heading text-4xl pt-28 pl-8 sm:pl-40 ">Shivaay Shakti Community</div>
      <div className="flex overflow-x-scroll scrollbar-hide   w-[87vw] sm:w-[96vw] mx-auto space-x-2 mt-8">
        <FourImg data1={data?.img0} />
        <MainImg data2={data1?.img0}/>
        <FourImg data1={data?.img1}/>
        <MainImg data2={data1?.img1}/>
        <FourImg data1={data?.img2}/>
        <MainImg data2={data1?.img2}/>
        <FourImg data1={data?.img3}/>
      </div>
      </div>
    </>
  );
}

export default Gallery;
