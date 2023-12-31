import React, { cache } from "react";
import DropDown from "./DropDown";
import { Divider } from "@mui/material";

export type accordion = {
  _id: string;
  title: string;
  image: string;
  text: string;
};

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

const getAccordions = async (): Promise<accordion[]> => {
  const res = await fetch(`${BASE_API_URL}/api/connectTest`, {
    cache: "no-store",
  });
  // console.log(res);
  if (!res.ok) {
    throw new Error("failed to collect data");
  } else {
    return res.json();
  }
};

const Info: React.FC = async (): Promise<JSX.Element> => {
  const response = await getAccordions();
  // console.log(response);
  return (
    <div className=" min-h-[1048px] bg-[#171717] p-[20px] pt-[100px] md:px-10 2xl:px-[60px] 2xl:pt-[138px]">
      <div className="flex flex-col">
        <h2 className="mb-[39px] text-2xl font-bold italic text-[#E0E0E0] 2xl:text-4xl 2xl:leading-9 ">
          INFO
        </h2>
        <Divider className="h-[1px] min-w-[335px] bg-white opacity-50" />
      </div>
      <div>
        {response.map((accordions) => {
          return (
            <div key={accordions._id} className="">
              <DropDown
                title={accordions.title}
                image={accordions.image}
                text={accordions.text}
                _id={accordions._id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Info;
