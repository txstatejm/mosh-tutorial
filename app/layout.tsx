import './globals.css'
import Navbar from './Navbar/page'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className="bg-slate-600">
        <Navbar />
        {children}
  
        </body>
    </html>
  )
}
