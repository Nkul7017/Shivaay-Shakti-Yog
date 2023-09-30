import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiSearch, HiXCircle } from "react-icons/hi";
// import { SnackbarProvider, enqueueSnackbar } from "notistack";

import {
  HiArrowSmallLeft,
  HiArrowSmallRight,
  HiOutlinePencil,
  HiOutlineDocumentCheck,
  HiOutlineClipboardDocument,
  HiOutlineEye,
} from "react-icons/hi2";
import {
  HiOutlineMail,
  HiPhone,
  HiInformationCircle,
  HiDotsHorizontal,
  HiOutlineTrash,
} from "react-icons/hi";

import { RiSurveyLine } from "react-icons/ri";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { data } from "autoprefixer";

const UserDataTableOffer = ({ data }) => {
  const [couponName, setCouponName] = useState("");

  const [discount, setDiscount] = useState("");
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md scrollbar-hide mt-6 mb-5 px-2">
        <table className="w-full text-sm text-left text-gray-500  inline">
          <thead className="text-xs  text-[#FAA200]  bg-[#283143]  ">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-12 py-2">
                Transaction Id
              </th>
              <th scope="col" className="px-20 py-2">
                Status
              </th>
              <th scope="col" className="px-6 py-2">
                Amount
              </th>
              {/* <th scope="col" className="px-6 py-2"></th> */}
              <th scope="col" className="px-6 py-2">
                Transaction No
              </th>
              <th scope="col" className="px-12 py-2">
                Course Id
              </th>
              <th scope="col" className="px-6 py-2">
                Course Name
              </th>
              <th scope="col" className="px-6 w-20 py-2">
                User Name
              </th>
              <th scope="col" className="px-6 py-2">
                User Id
              </th>
              {/* <th scope="col" className="px-6 py-2">
                Category
              </th> */}
              {/* <th scope="col" className="px-6 py-2">
                Type
              </th>

              <th scope="col" className="px-6 py-2">
                Age
              </th>
              <th scope="col" className="px-6 py-2">
                Gender
              </th> */}
              {/* <th scope="col" className="px-6 py-2">
                Duration
              </th>
              <th scope="col" className="px-6 py-2">
                Level{" "}
              </th>
              <th scope="col" className="px-6 py-2">
                Time
              </th>
              <th scope="col" className="px-6 py-2">
                Start Date{" "}
              </th>
              <th scope="col" className="px-6 py-2">
                Amount (INR)
              </th>
              <th scope="col" className="px-6 py-2">
                Payment Status
              </th>
              <th scope="col" className="px-6 py-2">
                Delete
              </th> */}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr
                  key={item._id}
                  className="bg-orange-400 bg-opacity-20 text-black border-b  hover:bg-[#283143]  hover:bg-opacity-20"
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      {/* <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label> */}
                    </div>
                  </td>

                  <td className="px-6 py-2 ">
                    <p className="w-20 text-[12px]">{item?._id}</p>
                  </td>
                  <td className="px-6 py-2 flex items-center text-center justify-center">
                    <p className="w-20">{item?.status} </p>

                    {/* {offersID == item._id && (
                        <button onClick={editPin}>
                          <HiOutlineDocumentCheck className="text-[#3D89BA]  text-2xl"></HiOutlineDocumentCheck>
                        </button>
                      )} */}
                  </td>

                  <td className="px-6 py-2 h-7 text-center ">
                    {/* <input className="w-20 h-7" type="number" /> */}

                    {item?.amount}
                  </td>
                  {/* <span
                      className="cursor-pointer hover:text-orange-500"
                      onClick={(e) => {
                        handleCopy(item._id);
                      }}
                    >
                      <HiOutlineClipboardDocument />
                    </span> */}

                  <td className="px-6 py-2">
                    {" "}
                    <p className="w-24 h-7">{item?.transactionNumber}</p>
                  </td>
                  <td className="px-6 py-2">
                    {" "}
                    <p className="w-32 text-[12px] h-7">{item?.courseId}</p>
                  </td>
                  <td className="px-6 py-2">
                    {" "}
                    <p className="w-24 text-[11px] h-7">{item?.courseName}</p>
                  </td>
                  <td className="px-6 py-2">
                    {" "}
                    <p className="w-20 text-[11px] h-7">{item?.traineeName} </p>
                  </td>
                  <td className="px-6 py-2">
                    {" "}
                    <p className="w-32 text-[11px] h-7">{item?.traineeId}</p>
                  </td>

                  {/* <td className="px-6 py-2 h-7">
                    <input
                      onChange={() => changeActive(item._id)}
                      type="checkbox"
                      defaultChecked={item.active}
                    />
                  </td>

                  <td className="px-6 py-2 h-7">
                    <input
                      onChange={() => changeShowAd(item._id)}
                      type="checkbox"
                      defaultChecked={item.showAd}
                    />
                  </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDataTableOffer;
