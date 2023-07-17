import { data } from "@/constants/data";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const { variables } = await request.json();
  // console.log(searchParams?.access_key);
  //console.log(variables);

  return NextResponse.json(data);
}
