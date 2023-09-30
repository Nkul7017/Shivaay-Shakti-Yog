import { Fragment, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200,
});

const Shurvey = () => {
  const [page, setPage] = useState(1);

  const [open, setOpen] = useState(false);
  const [ques1, setQues1] = useState("");
  const [ques2, setQues2] = useState("");
  const [ques3, setQues3] = useState("");
  const [ques4, setQues4] = useState("");
  const [bg, setBg] = useState();

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    setTimeout(() => {
      // handleOpen();
    }, 100000);
  }, []);

  const nextPage = () => {
    setPage(page + 1);
  };

  const formSubmit = () => {
    // setPage(page + 1);
    setOpen(false);
  };




 
  return (
    <>
      {open ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none "
            data-aos="zoom-in"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[360px]  sm:w-[550px] bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  {page == 1 && (
                    <h3
                      className="text-2xl font-semibold duration-500  "
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      {" "}
                      Whats Your Name ?
                    </h3>
                  )}
                  {page == 2 && (
                    <h3
                      className="text-2xl font-semibold duration-500"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      {" "}
                      Whats Your Email ?
                    </h3>
                  )}
                  {page == 3 && (
                    <h3
                      className="text-xl font-semibold duration-500"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      {" "}
                      Whats Your Phone Number ?
                    </h3>
                  )}
                  {page == 4 && (
                    <h3
                      className="text-xl font-semibold duration-500"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      {" "}
                      How would you rate your yoga practice level?
                    </h3>
                  )}

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  {page == 1 && (
                    <div
                      className="w-72 duration-500"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      <Input
                        label="Enter Your Name"
                        onChange={(e) => {
                          setQues1(e.target.value);
                        }}
                      />
                    </div>
                  )}
                  {page == 2 && (
                    <div
                      className="w-72 duration-500"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      <Input
                      type="email"
                        label="Enter Your Email"
                        onChange={(e) => {
                          setQues2(e.target.value);
                        }}
                      />
                    </div>
                  )}
                  {page == 3 && (
                    <div
                      className="w-72 duration-500"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      <Input
                      type="number"
                        label="Enter Your Phone Number"
                        onChange={(e) => {
                          setQues3(e.target.value);
                        }}
                      />
                    </div>
                  )}
                  {page == 4 && (
                    <div
                      className=" duration-500 flex justify-evenly items-center text-center w-full"
                      data-aos="fade-left"
                      data-aos-anchor="#example-anchor"
                      data-aos-offset="500"
                      data-aos-duration="500"
                    >
                      <button className={`bg-white-400 ${ques4 == 1 ? " popupInput " : null} text-orange-400 active:bg-orange-600 active:text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      onClick={()=>{setQues4(1)}}
                      >
                        1
                      </button>
                      <button className={`bg-white-400 ${ques4 == 2 ? " popupInput " : null} text-orange-400 active:bg-orange-600 active:text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      onClick={()=>{setQues4(2)}}
                      >
                        2
                      </button>
                      <button className={`bg-white-400 ${ques4 == 3 ? " popupInput " : null} text-orange-400 active:bg-orange-600 active:text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      onClick={()=>{setQues4(3)}}
                      >
                        3
                      </button>
                      <button className={`bg-white-400 ${ques4 == 4 ? " popupInput " : null} text-orange-400 active:bg-orange-600 active:text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      onClick={()=>{setQues4(4)}}
                      >
                        4
                      </button>
                      <button className={`bg-white-400 ${ques4 == 5 ? " popupInput " : null} text-orange-400 active:bg-orange-600 active:text-white font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      onClick={()=>{setQues4(5)}}
                      >
                        5
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>

                  <Button
                    disabled={
                      (ques1.length <= 0 && page == 1) ||
                      (ques2.length <= 0 && page == 2) ||
                      (ques3.length <= 0 && page == 3) ||
                      (ques4.length <= 0 && page == 4)
                    }
                    onClick={() => {
                      if (page >= 4) {
                        formSubmit();
                      } else {
                        nextPage();
                      }
                    }}
                    variant="gradient"
                    color="orange"
                  >
                    {page >= 4 ? "Submit" : "Next"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Shurvey;
