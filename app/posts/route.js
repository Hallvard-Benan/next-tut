import { NextResponse } from "next/server";

const posts = [
  { Name: "John", text: "hello world" },
  { Name: "Lisa", text: "one two three four five etc..." },
  { Name: "Ben", text: "Next js is cool, i love ice cream" },
];

export async function GET(request) {
  return NextResponse.json({ posts: posts }, { status: 200 });
}
