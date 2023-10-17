import { loungechairdata } from "@/util/loungeapi";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const loungechair = loungechairdata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(loungechair.length==0?{result:"No Data Found", success:false}:{result:loungechair[0], success:true}, {status:200})
}