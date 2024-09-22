"use client"
import { useState, useEffect } from "react"
import { Button } from "./components/ui/buttons"
import { Card, CardContent } from "./components/ui/card"
import { ChevronRightIcon, HeartIcon, ShieldCheckIcon, UsersIcon } from "lucide-react"
import Link from 'next/link'

export default function Component() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DPMN</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-purple-300 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-purple-300 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-purple-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">
            Revolutionizing Philanthropy with Blockchain
          </h2>
          <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
            Connect donors and charities seamlessly. Ensure transparency. Maximize impact.
          </p>
          <Link 
            href="/ngo-list" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="bg-purple-500 hover:bg-purple-600 text-white animate-fade-in-up animation-delay-400"
            >
              Join the Network <ChevronRightIcon className="ml-2" />
            </Button>
          </Link>
        </section>
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {mounted && (
            <>
              <FeatureCard 
                icon={<HeartIcon className="w-12 h-12 text-purple-400" />}
                title="Efficient Matching"
                description="Our AI-powered system connects donors with the most suitable charitable projects."
              />
              <FeatureCard 
                icon={<ShieldCheckIcon className="w-12 h-12 text-purple-400" />}
                title="Transparent Tracking"
                description="Blockchain technology ensures every donation is traceable and its impact measurable."
              />
              <FeatureCard 
                icon={<UsersIcon className="w-12 h-12 text-purple-400" />}
                title="Community-Driven"
                description="Join a network of like-minded individuals and organizations committed to making a difference."
              />
            </>
          )}
        </section>
        <section className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h3>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-colors"
          >
            Explore Projects
          </Button>
        </section>
      </main>
      <footer className="container mx-auto px-4 py-6 text-center text-sm opacity-75">
        © 2023 Decentralized Philanthropy Matching Network. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="bg-white/10 border-none">
      <CardContent className="p-6 text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

// Add these styles to your global CSS file
const styles = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}
`