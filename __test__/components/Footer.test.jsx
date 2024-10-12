import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '@/app/components/Footer'

describe('Footer component', () => {
  test('renders footer links correctly', () => {
    const { getByText } = render(<Footer />)

    // Test footer links
    expect(getByText('Débutant')).toBeInTheDocument()
    expect(getByText('Intermédiaire')).toBeInTheDocument()
    expect(getByText('Confirmé')).toBeInTheDocument()

    expect(getByText('Accueil')).toBeInTheDocument()
    expect(getByText('Contact')).toBeInTheDocument()
    expect(getByText('Prestations')).toBeInTheDocument()
    expect(getByText('Team')).toBeInTheDocument()
    expect(getByText('E-Books')).toBeInTheDocument()
    expect(getByText('School')).toBeInTheDocument()
  })

  test('renders footer company name', () => {
    const { getByText } = render(<Footer />)

    // Test footer company name
  })

  test('renders footer copyright information', () => {
    const { getByText } = render(<Footer />)

    // Test footer copyright information
    expect(getByText(/© 2024/i)).toBeInTheDocument()
    expect(getByText(/Tous droits réservés./i)).toBeInTheDocument()
    expect(getByText(/Crée avec /i)).toBeInTheDocument()
    expect(getByText(/par/i)).toBeInTheDocument()
  })
})
