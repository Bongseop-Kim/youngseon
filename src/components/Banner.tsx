import React from "react";

interface ArgType {
  img: string;
  title: string;
  p1: string;
  p2: string;
  contact: boolean;
}

function Banner({ img, title, p1, p2, contact }: ArgType) {
  return (
    <div className="relative overflow-hidden">
      <img className="object-cover w-full h-48" src={img} alt="Banner Img" />
      <div className="absolute top-0 left-0 px-6 py-4">
        <p className="text-3xl font-semibold leading-9 text-blue-600 pb-4 ">{title}</p>
        <p className="text-gray-600 whitespace-pre-line">
          {p1}
          <br />
          {p2}
        </p>
        {contact ? <p className="text-gray-800 pt-4">📞 문의 : 010-4945-7422</p> : null}
      </div>
    </div>
  );
}
export default Banner;
