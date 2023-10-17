import { studentchairsdata } from "@/util/studentapi";
import { NextResponse } from "next/server";

export function GET(req, content) {
    const studentchair = studentchairsdata.filter((item)=>item.id==content.params.id);
    return NextResponse.json(studentchair.lengthdata==0?{result:"No Data Found", status:false}:{result:studentchair[0], success:true}, {status:200})
}