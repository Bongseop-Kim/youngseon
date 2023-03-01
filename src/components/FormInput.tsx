import React from "react";

interface ArgType {
  value: string;
  onChange: any;
  title: string;
  textArea: boolean;
  placeholder: string;
}

export default function FormInput({ value, onChange, title, textArea, placeholder }: ArgType) {
  return (
    <>
      {textArea ? (
        <div className="md:flex py-4 w-full">
          <label className="md:w-44 w-full font-semibold bg-gray-100 leading-[3.75rem] h-min rounded-md block text-center">
            {title}
          </label>
          <div className="md:pl-4 flex-1 w-full mt-4 md:mt-0">
            <textarea
              className="py-2.5 pl-3 rounded-md w-full h-[7rem] border border-inpgray focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue text-subgray"
              defaultValue={value}
              placeholder={placeholder}
              name={title}
              onChange={onChange}
            />
          </div>
        </div>
      ) : (
        <div className="flex py-4">
          <label className="font-semibold bg-gray-100 w-2/6 sm:w-44 flex justify-center rounded-md leading-[3.75rem] mr-3 sm:mr-7 shrink-0">
            {title}
          </label>
          <div>
            <input
              className="border border-inpgray py-2.5 pl-3 rounded-md sm:w-80 focus:ring-1 focus:outline-none focus:border-blue focus:ring-blue h-full text-subgray w-full"
              defaultValue={value}
              placeholder={placeholder}
              name={title}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </>
  );
}
