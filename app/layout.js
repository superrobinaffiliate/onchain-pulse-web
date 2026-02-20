import './globals.css'

export const metadata = {
  title: 'OnChain Pulse | The Heartbeat of Web3 Wealth',
  description: 'Real-time crypto data, audited alpha, and elite trading tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
