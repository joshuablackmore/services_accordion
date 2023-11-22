import { NextResponse } from "next/server";
import { data } from "../../../data/mock_info_data";

export async function GET() {
  return NextResponse.json(data);
}
