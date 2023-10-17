import { workstationchairdata } from "@/util/workstationapi";
import { NextResponse } from "next/server";

export function GET(){
    let data = workstationchairdata;
    return NextResponse.json(data, {status:200})
}