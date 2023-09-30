import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { setUser } from "../features/counter/userSlice";
import { useDispatch } from "react-redux";

const selectUser = (state) => state.user;

const userData = { name: "John", age: 30 };

const ProfileCardTemp = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(setUser(userData));
  //   }, []);

  const getUserData = useSelector(selectUser);
  
  return (
    <div>
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-10 ml-10 hover:opacity-75 transition-opacity duration-300 hover:bg-transparent">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-yellow-400 dark:text-white">
            Personal Information
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0"></div>
                <div className="flex  min-w-0">
                  <p className="text-sm font-medium text-yellow-400 truncate dark:text-white">
                    Name :
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {getUserData?.user?.name}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0"></div>
                <div className="flex min-w-0">
                  <p className="text-sm font-medium text-yellow-400 truncate dark:text-white">
                    WhatsApp :
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {getUserData?.user?.phone}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0"></div>
                <div className="flex min-w-0">
                  <p className="text-sm font-medium text-yellow-400 truncate dark:text-white">
                    Email :
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {getUserData?.user?.email}{" "}
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0"></div>
                <div className="flex min-w-0">
                  <p className="text-sm font-medium text-yellow-400 truncate dark:text-white">
                    Age :
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {getUserData?.user?.age}
                  </p>
                </div>
              </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0"></div>
                <div className="flex min-w-0">
                  <p className="text-sm font-medium text-yellow-400 truncate dark:text-white">
                    Height :
                  </p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {getUserData?.user?.height}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardTemp;
