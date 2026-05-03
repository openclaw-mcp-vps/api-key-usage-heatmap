import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Key Usage Heatmap — Visual API Security Analytics',
  description: 'Analyze API logs to visualize which keys are used when, by whom, and for what endpoints. Interactive heatmaps for DevOps and security teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="881c7ceb-253b-4a61-9274-c7b39417cc6c"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
