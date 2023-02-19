import React from "react";
import sohanRed from "../../image/sohanRed.jpeg";
import sohanBlue from "../../image/sohanBlue.jpeg";
import sohanBlack from "../../image/sohanBlack.jpeg";
import post from "../../image/post.jpeg";
import designBack from "../../image/designBack.png";
import Banner from "../../components/Banner";

const products = [
  {
    name: "소언한복",
    image: sohanRed,
  },
  {
    name: "소언한복",
    image: sohanBlue,
  },
  {
    name: "소언한복",
    image: sohanBlack,
  },
  {
    name: "우정사업본부",
    image: post,
  },
];

function Equipment() {
  return (
    <div>
      <Banner
        img={designBack}
        title="포트폴리오"
        p1="영선산업은 상품에 기업의 아이덴티티를 녹여내어 기업이 주는"
        p2=" 외적 이미지 인상에 크게 기여할 수 있는 상품을 제작해드립니다."
        contact={false}
      />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, i) => (
              <div key={i} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.image}
                    alt="imagetie"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="/">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Equipment;
