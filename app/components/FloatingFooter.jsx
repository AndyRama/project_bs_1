import Link from 'next/link'
import React from 'react'

export const FloatingFooter = () => {
  return (
      <div>
      {/* Version 2 */}
       <div className="text-right items-center mx-auto text-sm pb-0">
          <Link
            href="/document/privacy"
            target="_blank"
            className="text-red-500 hover:text-[#2F2E2E]"
          >
            Privacy{' '}
          </Link>{' '}
          <Link
            href="/document/terms"
            target="_blank"
            className="hover:text-[#2F2E2E] text-red-500"
          >
            Terms{' '}
          </Link>
        </div>
    </div>
  )
}
