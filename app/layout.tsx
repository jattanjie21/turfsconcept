import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { GetStaticPaths, GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PitchPro - Book Football Pitches Online',
  description: 'Book football pitches easily with PitchPro. Find and reserve the perfect pitch for your game.',
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['1', '2', '3'].map((id) => ({ params: { id } }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = { id: params.id }
  return { props: { data } }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}