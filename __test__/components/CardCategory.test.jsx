import React, { act } from 'react'
import 'intersection-observer'
import { render, screen } from '@testing-library/react'
import CardCategory from '@/app/components/blog/CardCategory'

describe('CardCategory Component', () => {
  test('renders categories title correctly', async () => {
    await act(async () => {
      render(<CardCategory />)
    })

    // Vérifiez si le titre "Catégories" est présent
    expect(screen.getByText('Catégories')).toBeInTheDocument()
  })
  test('renders categories alls links correctly', async () => {
    await act(async () => {
      render(<CardCategory />)
    })

    // Vérifiez si les liens sont présents avec leurs libellés respectifs
    expect(screen.getByText('Nutrition')).toBeInTheDocument()
    expect(screen.getByText('Fitness')).toBeInTheDocument()
    expect(screen.getByText('Complément Alim.')).toBeInTheDocument()
    expect(screen.getByText('Entraînement')).toBeInTheDocument()
    expect(screen.getByText('Competition')).toBeInTheDocument()
    expect(screen.getByText('Exercice')).toBeInTheDocument()
  })

  test('renders categories  alls icons correctly', async () => {
    await act(async () => {
      render(<CardCategory />)
    })

    // Vérifiez si les icônes sont présentes
    expect(screen.getByTestId('icon1')).toBeInTheDocument()
    expect(screen.getByTestId('icon2')).toBeInTheDocument()
    expect(screen.getByTestId('icon3')).toBeInTheDocument()
    expect(screen.getByTestId('icon4')).toBeInTheDocument()
    expect(screen.getByTestId('icon5')).toBeInTheDocument()
    expect(screen.getByTestId('icon6')).toBeInTheDocument()
  })
})
