import { act } from 'react'
import { render, screen } from '@testing-library/react'
import Navigation from '@/app/components/Navigation'

describe('Navigation', () => {
  // Renders the navigation menu with all links visible on desktop
  it('should render the navigation menu with all links visible on desktop', async () => {
    await act(async () => {
      render(<Navigation />)
    })

    expect(screen.getByText('Unlcoaching')).toBeInTheDocument()
    expect(screen.getByText('Accueil')).toBeInTheDocument()
    expect(screen.getByText('Prestations')).toBeInTheDocument()
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Rejoignez-nous !')).toBeInTheDocument()
  })

  // Renders the navigation menu with a hamburger icon on mobile
  it('should render the navigation menu with a hamburger icon on mobile', async () => {
    await act(async () => {
      render(<Navigation />)
    })

    expect(
      screen.getByRole('button', { class: 'md:hidden text-md' }),
    ).toBeInTheDocument()
  })
})
