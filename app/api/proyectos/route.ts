import { NextResponse } from 'next/server'

type ResponseData = {
  message: string
}

export async function GET(request: Request) {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}