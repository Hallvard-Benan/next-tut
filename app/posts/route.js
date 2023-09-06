import { NextResponse } from "next/server";

const cars = [
  { make: "bmw", year: 2004 },
  { make: "bmw", year: 2004 },
  { make: "bmw", year: 2004 },
];

export async function GET(request) {
  return NextResponse.json({ posts: cars }, { status: 200 });
}
