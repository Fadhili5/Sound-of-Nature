'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/soundscape', label: 'Create Soundscape' },
  { href: '/community', label: 'Community' },
  { href: '/profile', label: 'My Profile' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Nature Harmony</Link>
        <div className="flex items-center space-x-6">
          <ul className="flex flex-wrap space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={cn(
                    "hover:text-green-300 transition-colors",
                    pathname === item.href ? "text-green-300 font-semibold" : ""
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className="px-4 py-2 bg-green-700 rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  )
}

