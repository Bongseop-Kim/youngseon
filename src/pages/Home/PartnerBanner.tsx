import React from "react";
import postLogo from "../../image/postLogo.png";

interface Partner {
  image: string;
  link: string;
}

const partners: Partner[] = [
  {
    image: postLogo,
    link: "",
  },
  {
    image: postLogo,
    link: "",
  },
  {
    image: postLogo,
    link: "",
  },
  {
    image: postLogo,
    link: "",
  },
  {
    image: postLogo,
    link: "",
  },
  {
    image: postLogo,
    link: "",
  },
];

const PartnerReturn = partners.map((partner: Partner) => {
  return (
    <div className="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center rounded-lg">
      <img src={partner.image} alt="postlogo" />
    </div>
  );
});

function PartnerBanner() {
  return (
    <div className="bg-gray-100">
      <div className="2xl:px-20 md:px-10 2xl:mx-auto 2xl:container ">
        <div className="md:py-12 py-8 px-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="lg:text-3xl md:text-3xl text-2xl font-bold leading-10 text-gray-800">
              영선산업은 고객사와 함께합니다.
            </h1>
          </div>
          <div className="flex items-center justify-center mt-10">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full place-items-center">
              {PartnerReturn}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerBanner;
