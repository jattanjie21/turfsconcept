"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Wallpaper as Soccerball } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Soccerball className="h-6 w-6" />
            <span className="inline-block font-bold">PitchPro</span>
          </Link>
          <nav className="flex gap-6">
            <Link
              href="/pitches"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Find Pitches
            </Link>
            <Link
              href="/tournaments"
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Tournaments
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Register</Link>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}