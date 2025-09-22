'use client'

import React from 'react'
import { clsx } from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'soft' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  accent?: 'primary' | 'secondary' | 'accent'
}

const Button: React.FC<ButtonProps> = ({
  className = '',
  children,
  variant = 'solid',
  size = 'md',
  accent = 'primary',
  ...props
}) => {
  const sizes = {
    sm: 'h-10 px-6 py-2 text-sm font-semibold tracking-wide',
    md: 'h-12 px-8 py-3 text-sm font-semibold tracking-wide',
    lg: 'h-14 px-10 py-4 text-base font-semibold tracking-wide',
  }[size]

  const base = `
    inline-flex items-center justify-center rounded-xl font-semibold 
    transition-all duration-300 ease-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background 
    whitespace-nowrap gap-2.5 min-w-[2.5rem]
    transform-gpu will-change-transform
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    relative overflow-hidden
    before:absolute before:inset-0 before:rounded-xl before:transition-opacity before:duration-300
  `

  const accents = {
    primary: {
      solid: `
        bg-gradient-to-br from-primary via-primary to-primary/80 text-background 
        shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40
        before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100
        active:scale-[0.98] hover:scale-[1.02] hover:-translate-y-0.5
        border border-primary/20 hover:border-primary/40
        focus-visible:ring-primary/50
      `,
      soft: `
        bg-primary/10 text-primary border border-primary/30 backdrop-blur-sm
        shadow-md shadow-primary/10 hover:shadow-lg hover:shadow-primary/20
        hover:bg-primary/15 hover:border-primary/40
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-primary/50
      `,
      outline: `
        border-2 border-primary/50 text-primary bg-transparent
        shadow-md shadow-primary/5 hover:shadow-lg hover:shadow-primary/15
        hover:border-primary hover:bg-primary/5
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-primary/50
      `,
      ghost: `
        text-primary bg-transparent
        hover:bg-primary/10 hover:shadow-md hover:shadow-primary/10
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-primary/50
      `,
    },
    secondary: {
      solid: `
        bg-gradient-to-br from-secondary via-secondary to-secondary/80 text-white 
        shadow-lg shadow-secondary/25 hover:shadow-xl hover:shadow-secondary/40
        before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100
        active:scale-[0.98] hover:scale-[1.02] hover:-translate-y-0.5
        border border-secondary/20 hover:border-secondary/40
        focus-visible:ring-secondary/50
      `,
      soft: `
        bg-secondary/10 text-secondary border border-secondary/30 backdrop-blur-sm
        shadow-md shadow-secondary/10 hover:shadow-lg hover:shadow-secondary/20
        hover:bg-secondary/15 hover:border-secondary/40
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-secondary/50
      `,
      outline: `
        border-2 border-secondary/50 text-secondary bg-transparent
        shadow-md shadow-secondary/5 hover:shadow-lg hover:shadow-secondary/15
        hover:border-secondary hover:bg-secondary/5
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-secondary/50
      `,
      ghost: `
        text-secondary bg-transparent
        hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/10
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-secondary/50
      `,
    },
    accent: {
      solid: `
        bg-gradient-to-br from-accent via-accent to-accent/80 text-background 
        shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40
        before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100
        active:scale-[0.98] hover:scale-[1.02] hover:-translate-y-0.5
        border border-accent/20 hover:border-accent/40
        focus-visible:ring-accent/50
      `,
      soft: `
        bg-accent/10 text-accent border border-accent/30 backdrop-blur-sm
        shadow-md shadow-accent/10 hover:shadow-lg hover:shadow-accent/20
        hover:bg-accent/15 hover:border-accent/40
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-accent/50
      `,
      outline: `
        border-2 border-accent/50 text-accent bg-transparent
        shadow-md shadow-accent/5 hover:shadow-lg hover:shadow-accent/15
        hover:border-accent hover:bg-accent/5
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-accent/50
      `,
      ghost: `
        text-accent bg-transparent
        hover:bg-accent/10 hover:shadow-md hover:shadow-accent/10
        active:scale-[0.98] hover:scale-[1.01]
        focus-visible:ring-accent/50
      `,
    },
  }[accent][variant]

  return (
    <button className={clsx(base, sizes, accents, className)} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export default Button
