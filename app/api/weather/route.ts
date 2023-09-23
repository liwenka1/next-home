import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      'https://restapi.amap.com/v3/weather/weatherInfo?key=d392d64494354a502e6a166cc6c7e740&city=110000'
    )
    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
