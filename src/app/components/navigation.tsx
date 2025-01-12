'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/soundscape', label: 'Create Soundscape' },
  { href: '/profile', label: 'My Profile' },
  { href: '/community', label: 'Community' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-green-800 text-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Nature Harmony</Link>
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
      </div>
    </nav>
  )
}

