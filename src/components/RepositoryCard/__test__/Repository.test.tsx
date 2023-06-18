import { render, screen } from '@testing-library/react'
import RepositoryCard from '../RepositoryCard'

describe('Repositorie', () => {
  it('should render Repositorie heading', () => {
    render(
      <RepositoryCard
        name={'app-test'}
        stars_count={5}
        description={'app test description'}
      />
    )
    const headingElement = screen.getByRole('heading', { name: 'app-test' })
    expect(headingElement).toBeInTheDocument()
  })

  it('should render Repositorie star count', () => {
    render(
      <RepositoryCard
        name={'app-test'}
        stars_count={5}
        description={'app test description'}
      />
    )
    const spanStarElement = screen.getByText(5)
    expect(spanStarElement).toBeInTheDocument()
  })

  it('should render Repositorie description', () => {
    render(
      <RepositoryCard
        name={'app-test'}
        stars_count={5}
        description={'app test description'}
      />
    )
    const descElement = screen.getByText('app test description')
    expect(descElement).toBeInTheDocument()
  })
})
