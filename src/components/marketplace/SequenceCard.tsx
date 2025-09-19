'use client'

import React from 'react'
import { Star, Play, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

type Sequence = {
  id: string
  title: string
  price: number
  image: string
  badge?: string
  rating?: number
  seller: string
  downloads: number
  duration: string
  props: string[]
}

const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] leading-none bg-primary/15 text-primary border border-primary/20 ${className}`}
    {...props}
  >
    {children}
  </span>
)

const SequenceCard: React.FC<{ 
  sequence: Sequence
  onAddToCart?: (sequence: Sequence) => void
  onToggleFavorite?: (sequence: Sequence) => void
} & React.HTMLAttributes<HTMLDivElement>> = ({
  sequence,
  onAddToCart,
  onToggleFavorite,
  className = '',
  ...props
}) => {
  return (
    <Card className={`group hover:shadow-xl hover:shadow-black/40 transition-all duration-300 ${className}`} {...props}>
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
        <div
          className="absolute inset-0 bg-gradient-to-b from-surface to-background transition-transform duration-500 group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${sequence.image})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-center">
          <div className="bg-primary/20 backdrop-blur-md rounded-full p-4 border border-primary/30">
            <Play className="w-8 h-8 text-primary fill-primary" />
          </div>
        </div>
        
        {sequence.badge && (
          <div className="absolute top-3 left-3">
            <Badge>{sequence.badge}</Badge>
          </div>
        )}
        
        <div className="absolute top-3 right-3">
          <button
            onClick={() => onToggleFavorite?.(sequence)}
            className="bg-black/40 backdrop-blur-md rounded-full p-2 border border-white/10 hover:border-secondary/50 transition-colors"
          >
            <Heart className="w-4 h-4 text-white hover:text-secondary" />
          </button>
        </div>
        
        <div className="absolute bottom-3 left-3 text-xs text-white/80 bg-black/40 backdrop-blur-md rounded-full px-2 py-1">
          {sequence.duration}
        </div>
      </div>

      <CardContent className="space-y-2">
        {/* Title and Price */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-semibold text-white line-clamp-2 group-hover:text-primary transition-colors">
              {sequence.title}
            </h3>
            <p className="text-xs text-gray-400 mt-1">by {sequence.seller}</p>
          </div>
          <div className="text-right">
            <span className="text-sm sm:text-base font-bold text-accent">
              ${sequence.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Rating and Downloads */}
        <div className="flex items-center justify-between text-xs text-gray-400">
          {sequence.rating && (
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${
                      i < sequence.rating! 
                        ? 'text-accent fill-accent' 
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-accent font-medium">{sequence.rating.toFixed(1)}</span>
            </div>
          )}
          <span>{sequence.downloads.toLocaleString()} downloads</span>
        </div>

        {/* Props Tags */}
        {sequence.props.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {sequence.props.slice(0, 3).map((prop, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full px-2 py-1 text-[10px] bg-secondary/10 text-secondary/80 border border-secondary/20"
              >
                {prop}
              </span>
            ))}
            {sequence.props.length > 3 && (
              <span className="inline-flex items-center rounded-full px-2 py-1 text-[10px] bg-gray-800 text-gray-400">
                +{sequence.props.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2">
          <Button 
            className="flex-1" 
            size="sm"
            onClick={() => onAddToCart?.(sequence)}
          >
            Add to Cart
          </Button>
          <Button 
            variant="soft" 
            size="sm" 
            className="px-3"
            accent="secondary"
          >
            Preview
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SequenceCard
export type { Sequence }
