import { NextResponse } from "next/server";
import dbConnect from "../lib/db";
import accordions from "@/app/models/accordions";

export async function GET() {
  try {
    await dbConnect();
    const data = await accordions.find();
    // console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse("data not collected", error);
  }
}
