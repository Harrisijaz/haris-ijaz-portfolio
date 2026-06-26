import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  children: ReactNode
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
}

const styles = {
  primary: 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500',
  secondary: 'border border-sky-400/50 bg-sky-400/10 text-sky-100 hover:bg-sky-400/20',
  ghost: 'border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10',
}

const base =
  'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-center text-sm font-semibold leading-tight transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-5'

const Button = ({ children, href, type = 'button', variant = 'primary', className = '', disabled, onClick, ariaLabel }: ButtonProps) => {
  const classes = `${base} ${styles[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        aria-label={ariaLabel}
        className={classes}
        href={href}
        whileHover={{ y: -3, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      aria-label={ariaLabel}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
