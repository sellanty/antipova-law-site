import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.YANDEX_MAPS_API_KEY || "";

  if (!apiKey) {
    return new NextResponse("Yandex Maps API key is not configured", {
      status: 500,
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    });
  }

  return new NextResponse(apiKey, {
    status: 200,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600"
    }
  });
}
