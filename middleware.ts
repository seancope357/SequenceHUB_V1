import type { NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export const config = {
  matcher: ['/', '/browse/:path*', '/marketplace/:path*'],
}

export default function middleware(request: NextRequest) {
  return updateSession(request)
}

