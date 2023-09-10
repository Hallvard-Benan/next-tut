import { NextResponse } from "next/server";

const usersMap = new Map();

usersMap.set("12", {
  id: 1,
  firstName: "Ola",
  lastName: "Nordmann",
});

console.log(usersMap.size);

usersMap.set("50", { firstName: "Kari", lastName: "Nordmann" });

console.log(usersMap.size);

export async function GET(request) {
  return NextResponse.json({ users: usersMap }, { status: 200 });
}
