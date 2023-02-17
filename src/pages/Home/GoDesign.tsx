import React from "react";
import { Link } from "react-router-dom";
import tieGroup from "../../image/tiegroup.png";
import rightArrow from "../../image/rightArrow.png";

function GoDesign() {
  return (
    <div className="mx-2 lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto h-[5.5rem~8rem] bg-blue-600 rounded-lg md:px-20 md:mb-24 mb-16 text-[1.375rem] ease-in-out">
      <Link to="/design">
        <div className="mx-auto md:w-[100%] flex items-center justify-around ">
          <img className="opacity-0 sm:opacity-100" src={tieGroup} alt="tie group" />
          <div className="flex text-white flex-wrap md:w-[40vw] md:justify-evenly bg-blue/80 rounded-lg ml-[-8.5rem] z-10 p-3 md:ml-0">
            <span className="font-semibold mr-1">도안이 필요하신가요?</span>
            <span>쉽고 빠르게 원하는 조합의 도안을 제작해보세요.</span>
          </div>
          <img className="px-4" src={rightArrow} alt="rightArrow" />
        </div>
      </Link>
    </div>
  );
}

export default GoDesign;
