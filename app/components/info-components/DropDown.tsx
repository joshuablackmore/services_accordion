"use client";
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import Divider from "@mui/material/Divider";
import { accordion } from "../Info";
import Image from "next/image";

const DropDown: React.FC<accordion> = ({ text, image, title, id }) => {
  return (
    <div className="">
      <Disclosure>
        {({ open }) => (
          <div className="flex flex-col">
            <Disclosure.Button className="my-[25px] flex gap-[41px] md:gap-[203px] 2xl:gap-[629px] ">
              <div className="flex  gap-[10px] self-center text-[#F4F4F4]  md:min-w-[100px]">
                <div className=" relative h-[0.76px] w-[45px] self-center bg-[#F4F4F4]" />
                <div
                  className={`${
                    open ? "hidden " : "self-center"
                  } absolute h-[0.76px] w-[45px] rotate-90 bg-[#F4F4F4]`}
                />
                <p
                  className={`${
                    open
                      ? "hidden text-[15px] font-light text-[#F4F4F4] md:block md:font-sans"
                      : "hidden"
                  }`}
                >
                  LESS
                </p>
                <p
                  className={`${
                    open
                      ? "hidden"
                      : "hidden text-[15px] font-light text-[#F4F4F4] md:block md:font-sans"
                  }`}
                >
                  MORE
                </p>
              </div>

              <span className="text-[32px]  font-black italic leading-9 text-[#E0E0E0]">
                {title}
              </span>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-100 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-90 opacity-0"
            >
              <Disclosure.Panel className=" ml-[86px] flex flex-col justify-end pb-5 md:ml-[304px] 2xl:ml-[730px]">
                <div className="flex h-full flex-col items-end gap-[15px]">
                  <div className="flex h-[50%] w-full flex-col items-end overflow-hidden">
                    <img
                      src={image}
                      className=" overflow-hidden object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-[15px] pb-5">
                    <p className=" font-sans text-xs font-light leading-[21px] text-[#F4F4F4] md:text-sm ">
                      {text}
                    </p>
                    <button className=" w-[225px] self-start border border-[#F4F4F4] px-[50px] py-[15px] text-xs font-bold text-[#F4F4F4]">
                      EMAIL US
                    </button>
                  </div>
                </div>
              </Disclosure.Panel>
            </Transition>
            <Divider className="h-[1px] min-w-[335px] bg-white opacity-50" />
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default DropDown;
