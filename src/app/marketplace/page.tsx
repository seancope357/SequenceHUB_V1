import React from 'react'
import Layout from '@/components/layout/Layout'
import SequenceCard, { type Sequence } from '@/components/marketplace/SequenceCard'
import Button from '@/components/ui/Button'
import { SlidersHorizontal } from 'lucide-react'
import { sampleSequences } from '@/data/sampleSequences'

const Hero: React.FC = () => (
  <section className="relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.08),transparent_60%)]" aria-hidden />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 pb-8">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white">
            Discover Premium <span className="text-primary">xLights</span> Sequences
          </h1>
          <p className="text-gray-300 max-w-2xl text-lg">
            Browse our curated collection of professional xLights sequences from top creators worldwide.
            Perfect for residential and commercial displays.
          </p>
          <div className="flex items-center gap-3">
            <Button size="lg">Explore All</Button>
            <Button variant="soft" size="lg" accent="secondary">Upload Your Own</Button>
          </div>
        </div>
        <div className="w-full lg:w-[420px] rounded-2xl border border-white/5 bg-surface/60 p-5 shadow-lg shadow-black/30 [box-shadow:0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
          <div className="text-sm text-gray-300 mb-3">Quick search</div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                className="w-full rounded-full bg-background/60 border border-white/10 px-4 h-11 text-sm text-white placeholder-gray-400 focus:border-primary/40 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Search by name, creator, or props..."
                type="text"
              />
            </div>
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const FilterBar: React.FC = () => (
  <div className="border-b border-white/5 mb-8">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-heading font-semibold text-white">Featured Sequences</h2>
          <span className="text-sm text-gray-400">({sampleSequences.length} results)</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            Filters
          </Button>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm">Newest</Button>
            <Button variant="ghost" size="sm">Popular</Button>
            <Button variant="ghost" size="sm">Price: Low</Button>
            <Button variant="ghost" size="sm">Price: High</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const SequenceGrid: React.FC<{ sequences: Sequence[] }> = ({ sequences }) => {
  const handleAddToCart = (sequence: Sequence) => {
    console.log('Adding to cart:', sequence.title)
    // Implement cart functionality
  }

  const handleToggleFavorite = (sequence: Sequence) => {
    console.log('Toggling favorite:', sequence.title)
    // Implement favorites functionality
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {sequences.map((sequence) => (
        <SequenceCard
          key={sequence.id}
          sequence={sequence}
          onAddToCart={handleAddToCart}
          onToggleFavorite={handleToggleFavorite}
        />
      ))}
    </div>
  )
}

export default function MarketplacePage() {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <Hero />
        <main className="mx-auto max-w-7xl px-4 sm:px-6 pb-16">
          <FilterBar />
          <SequenceGrid sequences={sampleSequences} />
          
          {/* Load More */}
          <div className="flex justify-center mt-12">
            <Button variant="outline" size="lg">
              Load More Sequences
            </Button>
          </div>
        </main>
      </div>
    </Layout>
  )
}
