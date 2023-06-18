import { mockRepositories } from './repositories'

const mockRepositoriesResponse = (username: string) => mockRepositories.filter((repo) => repo.owner.login == username)

export default {
  getRepositories: (username: string) => jest.fn().mockResolvedValue(mockRepositoriesResponse(username)),
}
