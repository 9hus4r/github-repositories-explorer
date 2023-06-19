import { render, screen } from '@testing-library/react'
import UserRepisitoriesCard from '../UserRepositoriesCard'
import { mockRepositories } from '../../../__mocks__/repositories'
import { GithubUserRepoType } from '../../../types'

const mockedToggleUserSelected = jest.fn()
describe('UserRepisitoriesCard', () => {
  it('should render user card', () => {
    render(
      <UserRepisitoriesCard
        user={{
          id: 0,
          login: 'dana',
          url: '',
          repos_url: '',
          avatar_url: '',
        }}
        isRepositoriesShow={false}
        toggleUserSelected={mockedToggleUserSelected}
        isRepoLoading={false}
        repositories={[]}
      />
    )
    const headingElement = screen.getByRole('heading', { name: 'dana' })
    expect(headingElement).toBeInTheDocument()
  })

  it('should render loading repository', () => {
    render(
      <UserRepisitoriesCard
        user={{
          id: 0,
          login: 'dana',
          url: '',
          repos_url: '',
          avatar_url: '',
        }}
        isRepositoriesShow={true}
        toggleUserSelected={mockedToggleUserSelected}
        isRepoLoading={true}
        repositories={[]}
      />
    )

    const loadingRepoElement = screen.getByTestId('repo-loading')
    expect(loadingRepoElement).toBeInTheDocument()
  })

  it('should render no repositories', () => {
    render(
      <UserRepisitoriesCard
        user={{
          id: 0,
          login: 'dana',
          url: '',
          repos_url: '',
          avatar_url: '',
        }}
        isRepositoriesShow={true}
        toggleUserSelected={mockedToggleUserSelected}
        isRepoLoading={false}
        repositories={[]}
      />
    )
    const noRepoElement = screen.getByText('No Repositories Available')
    expect(noRepoElement).toBeInTheDocument()
  })
  it('should render list repository', () => {
    const mackRepoMapped = mockRepositories.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      stargazers_count: repo.stargazers_count,
    })) as unknown as GithubUserRepoType[]

    render(
      <UserRepisitoriesCard
        user={{
          id: 0,
          login: 'dana',
          url: '',
          repos_url: '',
          avatar_url: '',
        }}
        isRepositoriesShow={true}
        toggleUserSelected={mockedToggleUserSelected}
        isRepoLoading={false}
        repositories={mackRepoMapped}
      />
    )

    const headingElement = screen.getAllByRole('heading', { name: /^(?!dana$).*/ })
    expect(headingElement.length).toEqual(19)
  })
})
