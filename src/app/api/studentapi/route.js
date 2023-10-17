import { studentchairsdata } from "@/util/studentapi";
import { NextResponse } from "next/server";

export function GET() {
    const data = studentchairsdata;
    return NextResponse.json(data, {status:200})
}