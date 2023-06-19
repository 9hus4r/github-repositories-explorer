import axios from 'axios'
import { GitHubSearchUserType, GithubUserRepoType } from '../types'

const api = axios.create({
  baseURL: 'https://api.github.com',
})

export const getListUser = async (keyword: string, limit: number = 5): Promise<GitHubSearchUserType> => {
  return await api.get<GitHubSearchUserType>(`/search/users?q=${keyword}&per_page=${limit}`).then((res) => res.data)
}

export const getListRepoByUsername = async (username: string): Promise<GithubUserRepoType[]> => {
  return await api.get<GithubUserRepoType[]>(`/users/${username}/repos`).then((res) => res.data)
}
