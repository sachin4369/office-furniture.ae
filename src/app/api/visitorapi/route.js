import { visitorchairdata } from "@/util/visitorapi";
import { NextResponse } from "next/server";

export function GET(){
    const data = visitorchairdata;
    return NextResponse.json(data, {status:200})
}