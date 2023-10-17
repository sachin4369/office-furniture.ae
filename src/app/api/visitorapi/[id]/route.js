import { visitorchairdata } from "@/util/visitorapi";
import { NextResponse } from "next/server";

export function GET(req, content){
    const visitorchair = visitorchairdata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(visitorchair.length==0?{result:"No Data Found",status:false}:{result:visitorchair[0], success:true}, {status:200})
}