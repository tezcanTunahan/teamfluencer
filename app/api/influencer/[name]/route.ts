import { NextRequest, NextResponse } from "next/server";
import User from "@/models/influencer";
import { connect } from "@/utils/database";

connect();
export async function GET(request: Request, route: { params: { name: string } }) {
  const users = await User.findOne({ surname: route.params.name });
  return NextResponse.json(users);
}
