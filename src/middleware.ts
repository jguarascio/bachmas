import { NextResponse } from 'next/server'

export function middleware() {
  const response = NextResponse.next()

  // Add no-cache headers
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  response.headers.set('Pragma', 'no-cache')
  response.headers.set('Expires', '0')

  return response
}

export const config = {
  matcher: '/:path*',
} 