import { render, screen } from '@testing-library/react'
import UserCard from '../UserCard'

describe('UserCard', () => {
  it('should render UserCard', () => {
    render(
      <UserCard
        name='agung'
        isOpen={false}
        toggle={() => {}}
      />
    )
    const headingElement = screen.getByRole('heading', { name: 'agung' })
    expect(headingElement).toBeInTheDocument()
  })
})
