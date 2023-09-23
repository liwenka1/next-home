import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch('https://api.oioweb.cn/api/bing')
    const data = await res.json()

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
