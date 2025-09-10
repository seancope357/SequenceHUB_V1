'use client'

import React from 'react'
import { clsx } from 'clsx'

const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div
    className={clsx(
      'rounded-2xl shadow-lg shadow-black/30 [box-shadow:0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.5)] bg-surface/80 border border-white/5 backdrop-blur-md',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={clsx('p-4 sm:p-5 border-b border-white/5', className)} {...props}>
    {children}
  </div>
)

const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={clsx('p-4 sm:p-5', className)} {...props}>
    {children}
  </div>
)

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className = '',
  children,
  ...props
}) => (
  <div className={clsx('p-4 sm:p-5 border-t border-white/5', className)} {...props}>
    {children}
  </div>
)

export { Card, CardHeader, CardContent, CardFooter }
