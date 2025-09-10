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
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-5 text-base',
  }[size]

  const base = `inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background`

  const accents = {
    primary: {
      solid: 'bg-gradient-to-b from-primary to-primary/90 text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-px focus-visible:ring-primary/50',
      soft: 'bg-primary/15 text-primary border border-primary/20 backdrop-blur-md focus-visible:ring-primary/50',
      outline: 'border border-primary/40 text-primary hover:border-primary/60 hover:bg-primary/5 focus-visible:ring-primary/50',
      ghost: 'text-primary hover:bg-primary/10 focus-visible:ring-primary/50',
    },
    secondary: {
      solid: 'bg-gradient-to-b from-secondary to-secondary/90 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-px focus-visible:ring-secondary/50',
      soft: 'bg-secondary/15 text-secondary border border-secondary/20 backdrop-blur-md focus-visible:ring-secondary/50',
      outline: 'border border-secondary/40 text-secondary hover:border-secondary/60 hover:bg-secondary/5 focus-visible:ring-secondary/50',
      ghost: 'text-secondary hover:bg-secondary/10 focus-visible:ring-secondary/50',
    },
    accent: {
      solid: 'bg-gradient-to-b from-accent to-accent/90 text-background shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] active:translate-y-px focus-visible:ring-accent/50',
      soft: 'bg-accent/15 text-accent border border-accent/20 backdrop-blur-md focus-visible:ring-accent/50',
      outline: 'border border-accent/40 text-accent hover:border-accent/60 hover:bg-accent/5 focus-visible:ring-accent/50',
      ghost: 'text-accent hover:bg-accent/10 focus-visible:ring-accent/50',
    },
  }[accent][variant]

  return (
    <button className={clsx(base, sizes, accents, className)} {...props}>
      {children}
    </button>
  )
}

export default Button
