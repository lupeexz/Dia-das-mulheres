import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primary">
      <Navbar />
      <main className="flex-1 container mx-auto px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  )
}