export type GitHubSearchUserType = {
  incomplete_results: boolean
  total_count: number
  items: GitHubUserType[]
}

export type GitHubUserType = {
  id: number
  login: string
  url: string
  repos_url: string
  avatar_url: string
}

export type GithubUserRepoType = {
  id: number
  name: string
  description?: string
  stargazers_count?: string
}

export type CardUserType = {
  name: string
  isOpen: boolean
  toggle: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, log: string) => void
}

export type CardRepoType = {
  name: string
  stars_count: number
  description: string
}

export type SearchFormType = {
  onSubmit: (username: string) => void
}

export type IconType = {
  height?: number
  width?: number
  color?: string
}
