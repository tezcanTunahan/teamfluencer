import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/utils/database";
import User from "@/models/influencer";

connect();
export async function GET(request: Request) {
  const users = await User.find({});
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const newUser = new User(body);
    const savedUser = await newUser.save();
    console.log(savedUser);
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
