import { meshchairdata } from "@/util/meshapi";
import { NextResponse } from "next/server";

export function GET(){
    const data = meshchairdata;
    return NextResponse.json(data, {status:200})
    
}