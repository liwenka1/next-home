import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { adcode } = body
    const res = await fetch(
      `https://restapi.amap.com/v3/weather/weatherInfo?key=d392d64494354a502e6a166cc6c7e740&city=${adcode}`
    )
    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
