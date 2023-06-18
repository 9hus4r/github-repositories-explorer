import { render, screen } from '@testing-library/react'
import RepositoryList from '../RepositoryList'
import { mockRepositories } from '../../../__mocks__/repositories'
import { GithubUserRepoType } from '../../../types'

const mackRepoMapped = mockRepositories.map((repo) => ({
  id: repo.id,
  name: repo.name,
  description: repo.description,
  stargazers_count: repo.stargazers_count,
})) as unknown as GithubUserRepoType[]

describe('RepositoriesList', () => {
  it('should render List Repositories', () => {
    render(
      <RepositoryList
        repositories={mackRepoMapped}
        isLoading={false}
      />
    )
    const headingElement = screen.getAllByRole('heading')
    expect(headingElement.length).toEqual(19)
  })
  it('should render No Repositories', () => {
    render(
      <RepositoryList
        repositories={[]}
        isLoading={false}
      />
    )
    const noRepoElement = screen.getByText('No Repositories Available')
    expect(noRepoElement).toBeInTheDocument()
  })
  it('should render Loading Repositories', () => {
    render(
      <RepositoryList
        repositories={[]}
        isLoading={true}
      />
    )
    const loadingRepoElement = screen.getByTestId('repo-loading')
    expect(loadingRepoElement).toBeInTheDocument()
  })
})
