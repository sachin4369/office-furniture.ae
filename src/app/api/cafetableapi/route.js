import { cafetabledata } from "@/util/cafetableapi";
import { NextResponse } from "next/server";

export function GET() {
    const data = cafetabledata;
    return NextResponse.json(data, {status:200})
}