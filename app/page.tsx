import React from "react";
import Info from "./components/Info";
import { BASE_API_URL } from "@/utils/constants";

export default function Home() {
  if (!BASE_API_URL) {
    return null;
  }
  return (
    <>
      <Info />
    </>
  );
}
