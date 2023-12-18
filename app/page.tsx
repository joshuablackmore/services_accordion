import React from "react";
import Info from "./components/info-components/Info";

export default function Home() {
  if (!process.env.NEXT_PUBLIC_BASE_API_URL) {
    return null;
  }
  return (
    <>
      <Info />
    </>
  );
}
