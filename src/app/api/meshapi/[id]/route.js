import { meshchairdata } from "@/util/meshapi";
import { NextResponse } from "next/server";

export function GET(request, content){
    const meshchair = meshchairdata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(meshchair.length==0?{result:"No Data Found", success: false}:{result:meshchair[0], success:true},{status:200})
}