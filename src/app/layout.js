import "./globals.css"
// Supports weights 100-900
import "@fontsource-variable/overpass"

import Navigation from "./components/navigation"

export const metadata = {
  title: "KimberleyMcDonald.co.uk",
  description: "Independent UK artist and creator",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
