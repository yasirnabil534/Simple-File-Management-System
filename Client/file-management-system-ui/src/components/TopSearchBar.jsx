import React from "react";
import SearchIcon from '../assets/Search.svg';

const TopSearchBar = () => {
  return (
    <div className="flex h-20 items-center justify-between p-10 border-b-2">
      <div className="flex h-7 w-4/5">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Type to search..."
          className="border-0 ml-4 w-full focus:outline-none"
        />
      </div>
      <div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div
            className='w-[53px] h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-toggle-false after:pl-0.5 after:pt-0.5 after:absolute after:top-[3px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[23px] after:w-[23px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 relative'
          ></div>
          {/* <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span> */}
        </label>
      </div>
    </div>
  );
};

export default TopSearchBar;
