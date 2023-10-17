import { cafetabledata } from "@/util/cafetableapi";
import { NextResponse } from "next/server";

export function GET(request, content) {
    const cafetable = cafetabledata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(cafetable.length==0?{result:"No Data Found", success:false}:{result:cafetable[0], success:true}, {status:200})
}