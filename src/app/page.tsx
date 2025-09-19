import Link from 'next/link'
import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/Button'
import { Play, Star, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-surface to-background">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h1 className="text-6xl md:text-8xl font-heading font-extrabold mb-6">
            The <span className="text-primary">xLight</span>{' '}
            <span className="text-secondary">Sequence</span>{' '}
            <span className="text-accent">Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Discover, purchase, and sell premium xLights sequences from creators worldwide.
            Professional quality sequences for every occasion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/browse">
              <Button size="lg" className="px-8">
                Browse Sequences
              </Button>
            </Link>
            <Link href="/become-seller">
              <Button variant="outline" size="lg" accent="secondary" className="px-8">
                Become a Seller
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Creators */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Featured <span className="text-primary">Creators</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Discover sequences from our top-rated creators
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface rounded-xl p-6 border border-primary/20 hover-glow-primary transition-all">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                    <span className="font-bold text-background">C{i}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white">Creator {i}</h3>
                    <div className="flex items-center text-accent">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm">4.9 (120 reviews)</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">
                  Specializing in Halloween and Christmas sequences with over 50 premium designs.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">24 Sequences</span>
                  <Link href="#" className="text-secondary hover:text-accent transition-colors">
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Sequences Preview */}
      <section className="py-20 px-6 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Top <span className="text-secondary">Sequences</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Most popular sequences this month
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-surface rounded-xl overflow-hidden border border-primary/20 hover-glow-primary transition-all group">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 right-2 bg-accent text-background text-xs font-bold px-2 py-1 rounded">
                    ${(i * 5 + 10)}.99
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-bold text-white mb-2">
                    Christmas Magic {i}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Perfect for residential displays with 32 channels and smooth transitions.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-accent">
                      <Star className="w-4 h-4 fill-current mr-1" />
                      <span className="text-sm">4.8</span>
                    </div>
                    <div className="flex items-center text-primary">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm">{i * 120} sales</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-400 mb-8">
            Get notified about new sequences, featured creators, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface border border-primary/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button>
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
