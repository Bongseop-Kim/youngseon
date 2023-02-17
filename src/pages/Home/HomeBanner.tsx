import React from "react";

import backgroundImg from "../../image/tie-white-background.png";

function HomeBanner() {
  return (
    <div className="md:pt-0 p-12 bg-lightpink">
      <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto relative bg-lightpink">
        <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto">
          <div className="lg:flex md:flex block justify-between items-center">
            <div className="md:pl-10 pl-4">
              <p className="text-3xl font-semibold leading-9 text-gray-800 pb-4">
                영선산업은 고객분들에게
                <br />
                최고의 경험으로 보답합니다.
              </p>
              <p className="text-base leading-normal text-gray-600">
                영선산업은 넥타이 제조업체에서 10년 이상 축적된 경험으로 찾아 주시는
                <br />
                고객분들에게 최상의 제품을 전달하기 위해 최선을 다합니다.
              </p>
              <p className="text-base leading-none text-gray-800 pt-4">📞 문의 : 010-4945-7422</p>
            </div>
            <div className="md:pl-10">
              <img src={backgroundImg} className="w-full h-full" alt="tie" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
