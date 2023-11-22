"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { accordion } from "../Info";

const DropDown: React.FC<accordion> = ({ text, image, title, id }) => {
  return (
    <div className="flex-1 max-w-md m-[20px]">
      <Disclosure>
        {({ open }) => (
          <div>
            <Disclosure.Button className="flex rounded-md my-[25px] ">
              <div className="relative self-center h-[1px] bg-white w-[45px]" />
              <div
                className={`${
                  open ? "hidden" : ""
                } absolute rotate-90 self-center h-[1px] bg-white w-[45px]`}
              />

              <span className="text-[#E0E0E0] ml-[41px] font-black italic text-[32px] leading-9">
                {title}
              </span>
            </Disclosure.Button>

            <Disclosure.Panel className="flex flex-col gap-[15px] max-w-[375px] ml-[86px]">
              <Image
                className=""
                alt="find us pic"
                width={249}
                height={153}
                src={image}
              />
              <p className="text-white font-light text-xs min-h-[147px] max-w-[249px] leading-[21px] ">
                {text}
              </p>
              <button className=" py-[15px] px-[50px] w-[225px] border border-[#F4F4F4] text-[#F4F4F4] font-bold text-xs">
                EMAIL US
              </button>
            </Disclosure.Panel>
            <Divider className="bg-white h-[1px] max-w-[335px] mt-[25px] " />
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default DropDown;
