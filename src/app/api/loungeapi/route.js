import { loungechairdata } from "@/util/loungeapi";
import { NextResponse } from "next/server";

export function GET() {
    const data = loungechairdata;
    return NextResponse.json(data, {status:200})
}