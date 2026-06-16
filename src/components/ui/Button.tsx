import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  className?: string
  onClick?: () => void
}

const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer'

const variants = {
  primary: 'bg-turquoise text-cream hover:bg-turquoise-dark shadow-sm',
  secondary: 'bg-cream text-brown hover:bg-offwhite shadow-sm',
  outline: 'border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-cream',
}

const sizes = {
  sm: 'text-sm px-5 py-2.5',
  md: 'text-sm px-7 py-3',
  lg: 'text-base px-9 py-4',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  className = '',
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes}>{children}</a>
  }
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
