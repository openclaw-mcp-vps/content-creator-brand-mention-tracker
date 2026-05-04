import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BrandWatch — Track When Brands Mention Your Content',
  description: 'Monitors social media and the web for when brands reference or share your creator content without attribution. Get notified instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="641ef238-b6f2-4a4e-8dd0-7676a2b1685e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
