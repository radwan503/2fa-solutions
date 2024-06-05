import { NextResponse,  NextRequest } from "next/server";

export async function POST(request) {
  // Process a POST request
  try {
    const { mobileNumber } = await request.json();

    if(!mobileNumber) throw new Error("Mobile number required");

    const result = await fetch(`${process.env.NEXT_PUBLIC_AUTH_API}/otp/send`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        referer: "qcoom.com",
      },
      body: JSON.stringify({
        mobileNumber: mobileNumber,
      }),
    });
    const output = await result.json();
    return new NextResponse(
      JSON.stringify({ ...output }),
      { status: 200 }
    );
  } catch (e) {
    return new NextResponse(JSON.stringify({ message: (e).message }), {
      status: 500,
    });
  }
}
