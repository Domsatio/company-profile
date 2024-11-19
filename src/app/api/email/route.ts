import { NextResponse } from 'next/server'
import { sendContactUsEmail } from '@/helpers/emailService'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    await sendContactUsEmail(body)

    return NextResponse.json({
      success: true,
      statusCode: 200,
      message: 'Email sent successfully!'
    })
  } catch {
    return NextResponse.json(
      {
        success: false,
        statusCode: 500,
        message: 'Failed to send email'
      },
      { status: 500 }
    )
  }
}
