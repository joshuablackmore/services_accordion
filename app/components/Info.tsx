import React from "react";
import DropDown from "./info-components/DropDown";
import { Divider } from "@mui/material";

export type accordion = {
  id: number;
  title: string;
  image: string;
  text: string;
};

// type accordionResponse = {
//   data: accordion[];
// };

const getAccordions = async (): Promise<accordion> => {
  const res = await fetch("http://localhost:3000/api/data");

  if (!res.ok) {
    throw new Error("failed to collect data");
  } else {
    return res.json();
  }
};

const Info: React.FC = async (): Promise<JSX.Element> => {
  const response = await getAccordions();
  console.log(response);

  return (
    <div className=" bg-[#171717] min-h-[1048px]">
      <div className="flex pt-[100px] pl-[20px]">
        <h2 className="text-[#E0E0E0] font-bold italic text-2xl mb-[39px]">
          INFO
        </h2>
      </div>
      <Divider className="bg-white h-[1px] max-w-[335px] mx-5" />
      {response.map((accordions: accordion) => {
        return (
          <div key={accordions.id}>
            <DropDown
              title={accordions.title}
              image={accordions.image}
              text={accordions.text}
              id={accordions.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Info;
