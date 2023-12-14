import { NextResponse } from "next/server";
import { newDbConnect } from "@/app/api/lib/newDb";
import accordions from "@/app/models/accordions";

export async function GET() {
  try {
    await newDbConnect();
    const data = await accordions.find();
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.log("error", error);
    return new NextResponse("Error");
  }
}
