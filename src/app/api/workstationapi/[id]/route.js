import { workstationchairdata } from "@/util/workstationapi";
import { NextResponse } from "next/server";

export function GET(request, content){
    const workstationchair = workstationchairdata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(workstationchair.length==0?{result:"No Data Found", success: false}:{result:workstationchair[0], success:true},{status:200})
}