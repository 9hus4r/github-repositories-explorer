import { fireEvent, render, screen } from '@testing-library/react'
import UserSearchForm from '../UserSearchForm'

const mockSubmitFn = jest.fn()

describe('UserSearchForm', () => {
  it('should render search input', () => {
    render(<UserSearchForm onSubmit={mockSubmitFn} />)
    const searchInputElement = screen.getByPlaceholderText('Enter username')
    expect(searchInputElement).toBeInTheDocument()
  })
  it('should render search button', () => {
    render(<UserSearchForm onSubmit={mockSubmitFn} />)
    const searchButtonElement = screen.getByRole('button', { name: 'Search' })
    expect(searchButtonElement).toBeInTheDocument()
  })
  it('should show error msg', () => {
    render(<UserSearchForm onSubmit={mockSubmitFn} />)
    const searchButtonElement = screen.getByRole('button', { name: 'Search' })
    fireEvent.click(searchButtonElement)
    const errorMsg = screen.getByText('Please enter username for search user list')
    expect(errorMsg).toBeInTheDocument()
  })
  it('should show search description', () => {
    render(<UserSearchForm onSubmit={mockSubmitFn} />)
    const searchInputElement = screen.getByPlaceholderText('Enter username')
    const searchButtonElement = screen.getByRole('button', { name: 'Search' })

    fireEvent.focus(searchInputElement)
    fireEvent.change(searchInputElement, { target: { value: 'agung' } })
    fireEvent.click(searchButtonElement)

    const errorMsg = screen.getByText('Showing users for "agung"')
    expect(errorMsg).toBeInTheDocument()
  })
  it('should trigger onSubmit with input value when button is clicked', () => {
    render(<UserSearchForm onSubmit={mockSubmitFn} />)

    const searchInputElement = screen.getByPlaceholderText('Enter username')
    const searchButtonElement = screen.getByRole('button', { name: 'Search' })

    fireEvent.change(searchInputElement, { target: { value: 'perdana' } })
    fireEvent.click(searchButtonElement)

    expect(mockSubmitFn).toHaveBeenCalledWith('perdana')
  })
})
