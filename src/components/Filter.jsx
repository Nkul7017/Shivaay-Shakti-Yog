import React from "react";
import { BsFillBarChartLineFill } from "react-icons/bs";

const Filter = () => {
  return (
    <div >

        <div className="bg-white w-80 shadow-2xl px-4 pb-20 py-12 rounded-md">
      <div className="flex gap-44 -mt-6  pl-2">
        <h2>Sort By</h2>
        <h2>Reset</h2>
      </div>

      <div className="flex gap-2 mt-4 px-2">
        <div className="flex flex-col w-20 p-2 rounded-3xl bg-white shadow-2xl">
          <div className="text-center">
            <BsFillBarChartLineFill className="ml-6 text-yellow-400"></BsFillBarChartLineFill>
            <h2 className="text-[14px]">Popularity</h2>
            <h2 className="text-[10px]">Popularity First</h2>
          </div>
        </div>

        <div className="flex flex-col w-20 p-2 rounded-3xl bg-white shadow-2xl">
          <div className="text-center">
            <BsFillBarChartLineFill className="ml-6 text-yellow-400"></BsFillBarChartLineFill>
            <h2 className="text-[14px]">Price</h2>
            <h2 className="text-[10px]">Low to High</h2>
          </div>
        </div>
        <div className="flex flex-col w-20 p-2 rounded-3xl bg-white shadow-2xl">
          <div className="text-center">
            <BsFillBarChartLineFill className="ml-6 text-yellow-400"></BsFillBarChartLineFill>
            <h2 className="text-[14px]">Price</h2>
            <h2 className="text-[10px]">High to Low</h2>
          </div>
        </div>
        <div className="flex flex-col w-20 p-2 rounded-3xl bg-white shadow-2xl">
          <div className="text-center">
            <BsFillBarChartLineFill className="ml-6 text-yellow-400"></BsFillBarChartLineFill>
            <h2 className="text-[14px]">rating</h2>
            <h2 className="text-[10px]">Highest rating</h2>
          </div>
        </div>
      </div>

      <div className="flex gap-24 pl-2 mt-2">
        <h2>Select Filter</h2>
        <h2>Reset Filter</h2>
      </div>

      <h1 className="text-[12px] ml-4 mt-4 font-bold">Age Group</h1>

      <div className="mt-2 ml-4">
        <div class="flex items-center mb-1 ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            12-18
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            18-25
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            25-40
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            40-60
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded-2xl text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            60+
          </label>
        </div>
      </div>

      <h1 className="text-[12px] ml-4 mt-2 font-bold">Duration</h1>

      <div className="mt-2 ml-4">
        <div class="flex items-center mb-1 ">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            1 week
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            15 Days
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            30 Days
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            60 Days
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded-2xl text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            90 Days
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded-2xl text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            6 Months
          </label>
        </div>
        <div class="flex items-center mb-1">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded-2xl text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="default-checkbox"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
           Annual
          </label>
        </div>


        <h1 className="text-[12px]  mt-2 font-bold">Gender</h1>

  <div class="flex items-center mb-1 ">
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-checkbox"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Male
    </label>
  </div>
  <div class="flex items-center mb-1">
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-checkbox"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Female
    </label>
  </div>
  <div class="flex items-center mb-1">
    <input
      id="default-checkbox"
      type="checkbox"
      value=""
      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    />
    <label
      for="default-checkbox"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
     Other
    </label>
  </div>
        

  <h1 className="text-[12px]  mt-2 font-bold">Level</h1>

<div class="flex items-center mb-1 ">
  <input
    id="default-checkbox"
    type="checkbox"
    value=""
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    for="default-checkbox"
    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
    Beginner
  </label>
</div>
<div class="flex items-center mb-1">
  <input
    id="default-checkbox"
    type="checkbox"
    value=""
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    for="default-checkbox"
    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
   Medium
  </label>
</div>
<div class="flex items-center mb-1">
  <input
    id="default-checkbox"
    type="checkbox"
    value=""
    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    for="default-checkbox"
    class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
  >
   Advance
  </label>
</div>

<h1 className="mt-4">Price Range</h1>


      </div>
      </div>
    </div>
  );
};

export default Filter;
