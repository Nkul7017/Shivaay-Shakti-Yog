import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StarRating from "../components/StarRating";
import axios from "axios";
import { useSelector } from "react-redux";
import UserDataTableOffer from "../components/UserDataTableOffer";
import DesboardNavbar from "../components/DesboardNavbar";
import Navbar from "../components/Navbar";

const Transactions = () => {
  const selectUser = (state) => state.user;
  const getUserData = useSelector(selectUser);

  const [id, setId] = useState("");
  const [txns, setTxns] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setId(getUserData?.user?._id);
    }, 1000);
  }, [getUserData]);

  const getUserTxns = () => {
    axios
      .get(`https://shivayshaktibackend.onrender.com/transaction/user/${id}`)
      .then((response) => {
        console.log(" response======>", response.data.transactions);
        setTxns(response?.data?.transactions);
      });
  };

  useEffect(() => {
    if (id) {
      getUserTxns();
    }
  }, [id]);

  return (
    <>
      <div>
        <div className="flex">
          <div className="sm:flex hidden h-screen">
            <Sidebar></Sidebar>
          </div>
          <div className="bg-[url('https://cdn.discordapp.com/attachments/1031605156996972574/1086910403788931153/Screen_1.png')] w-full bg-no-repeat bg-cover">
            <div className="lg:flex lg:flex-col hidden">
              <Navbar />
            </div>
            <div className="lg:hidden">
              <DesboardNavbar />
            </div>
            <div className="flex justify-center mt-10">
              <h1 className="text-2xl text-orange-400">Transactions</h1>

              {/* {txns.map((item, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className="lg:w-[600px] lg:h-[500px] w-[300px] h-[400px] lg:mt-20 mt-10 border-2 border-black"
                    >
                      <h1>Transaction Id: {item?._id}</h1>
                      <h1>Status:{item?.status} </h1>
                      <h1>Amount:{item?.amount} </h1>
                      <h1>Transaction No: {item?.transactionNumber} </h1>
                      <h1>Course Id: {item?.courseId} </h1>
                      <h1>Course Name: {item?.courseName} </h1>
                      <h1>User Name: {item?.traineeName} </h1>
                      <h1>User Id:{item?.traineeId} </h1>
                    </div>
                  </>
                );
              })} */}
            </div>

            <UserDataTableOffer data={txns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
