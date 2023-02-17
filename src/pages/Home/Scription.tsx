import React from "react";
import equipment1 from "../../image/equipment1.png";
import equipment2 from "../../image/equipment2.png";
import equipment3 from "../../image/equipment3.png";
import equipment4 from "../../image/equipment4.png";
import office from "../../image/office.png";
import rectangle from "../../image/rectangle.png";
import GoDesign from "./GoDesign";

function Scription() {
  return (
    <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto">
      <div className="flex flex-col text-center pb-10">
        <p className="text-2xl pt-16 md:pt-24 pb-1 leading-[2.3rem] keep-all">
          폴리부터 실크까지,
          <br className="sm:hidden" /> 소량부터 대량까지 <br />
          <span className="text-blue-600 font-bold">생각하는 모든 것을 만들어 드립니다.</span>
        </p>
        <p className="pb-2.5 pt-10 leading-[1.8rem] text-gray-600 keep-all">
          영선산업은 10여년 동안 축적된 경험과 기술로 맡겨 주시는 모든 고객분들에게 최고의 만족도를 보장합니다.
          <br />
          고객분들에게 항상 고마운 마음을 담아 최선을 다하겠습니다.
        </p>
      </div>
      <div className="prc_img grid gap-[1rem] gap-y-4 md:grid-cols-4 pb-20 justify-center justify-items-center sm:grid-cols-2">
        <img src={equipment1} alt="tie equipment" />
        <img src={equipment2} alt="tie equipment" />
        <img src={equipment3} alt="tie equipment" />
        <img src={equipment4} alt="tie equipment" />
      </div>
      <GoDesign />
      <div className="flex flex-wrap sm:flex-nowrap pb-16 md:pb-36 justify-between sm:flex-1 p-2">
        <div className="sm:min-w-[60%] min-w-full">
          <p className="font-bold pb-6 md:pb-12 text-[1.375rem] leading-[2.275rem] tracking-[-.05rem] md:tracking-normal ">
            높은 품질로 전국 기업 뿐만 아니라 관공서,
            <br className="sm:block" />
            각종 단체, 행사, 기념과 홍보에 쓰이는 상품을 제작합니다.
          </p>
          <p className="text-gray-900 pb-5 leading-[1.8rem]">
            영선산업은 이미지 홍보 단체 상품에 기업의 아이덴티티를 녹여내어
            <br className="hidden sm:block" />
            <span className="text-gray-900 ">
              외적 이미지 및 기업이 주는 인상에 크게 기여할 수 있는 최상급 품질의 상품을 제작해드립니다.
            </span>
          </p>
          <div className="w-full rounded-lg py-2 flex items-center justify-evenly bg-gray-100 h-14 text-gray-900 text-sm flex-wrap">
            <span>Business Promotion</span>
            <img src={rectangle} alt="rectangle" />
            <span>CI / BI 활용 로고 상품</span>
            <img src={rectangle} alt="rectangle" />
            <span>굿즈 상품</span>
          </div>
        </div>
        <div className="sm:ml-6 pt-6 sm:pt-0">
          <img src={office} alt="office" className="object-cover h-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default Scription;
