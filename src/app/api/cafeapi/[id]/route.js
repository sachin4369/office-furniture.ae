import { cafechairsdata } from "@/util/cafeapi";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const cafechair = cafechairsdata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(cafechair.length==0?{result:"No Data Found", success:false}:{result:cafechair[0], success:true}, {status:200})
}