import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HelloPage from '../page'

describe('HelloPage', () => {
  it('renders the hello world heading', () => {
    render(<HelloPage />)
    expect(screen.getByRole('heading', { name: 'Hello, World!' })).toBeInTheDocument()
  })

  it('renders the welcome subheading', () => {
    render(<HelloPage />)
    expect(screen.getByText('Welcome to UIGen')).toBeInTheDocument()
  })

  it('renders a back link to the home page', () => {
    render(<HelloPage />)
    const link = screen.getByRole('link', { name: '← Back to Home' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
