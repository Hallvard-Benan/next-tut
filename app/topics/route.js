import { NextResponse } from "next/server";

const newTopics = new Set();

newTopics.add("cats");

newTopics.add("cars");

export async function GET(request) {
  console.log("search params >>>", request.nextUrl.searchParams);
  let params = new URLSearchParams(request.nextUrl.searchParams);
  let searchedTopic = params.get("topic");
  const topicsTrue = newTopics.has(searchedTopic);
  let message = "";
  if (topicsTrue) {
    message = "yes, the topic: " + searchedTopic + " exists";
  } else {
    message = "Sorry, the topic: " + searchedTopic + " does not exist";
  }

  return NextResponse.json({ data: message }, { status: 200 });
}

export async function POST(request) {
  let res = await request.json();
  console.log(res.topic);
  newTopics.add(res.topic);
  console.log("request" + request.body);
  console.log(newTopics.size);
  return NextResponse.json({ message: "something happened" });
}

export async function DELETE(request) {
  let res = await request.json();
  newTopics.delete(res.topic);
  return NextResponse.json({ message: "something happened" });
}
