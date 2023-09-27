import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await axios.get('https://api.oioweb.cn/api/common/OneDayEnglish')
    const data = await res.data

    return NextResponse.json(data)
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 })
  }
}
