import { cafechairsdata } from "@/util/cafeapi";
import { NextResponse } from "next/server";

export function GET(){
    const data = cafechairsdata;
    return NextResponse.json(data, {status:200})
}