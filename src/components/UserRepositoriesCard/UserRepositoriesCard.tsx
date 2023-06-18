import React from 'react'
import UserCard from '../UserCard/UserCard'
import RepositoryList from '../RepositoryList/RepositoryList'
import { GitHubUserType, GithubUserRepoType } from '../../types'

interface UserRepositoriesCardPropsType {
  user: GitHubUserType
  isRepositoriesShow: boolean
  toggleUserSelected: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, log: string) => void
  isRepoLoading: boolean
  repositories: GithubUserRepoType[]
}

const UserRepositoriesCard = ({
  user,
  isRepositoriesShow,
  toggleUserSelected,
  isRepoLoading,
  repositories,
}: UserRepositoriesCardPropsType) => (
  <div className='flex w-full flex-col space-y-[12px]'>
    <UserCard
      name={user?.login}
      isOpen={isRepositoriesShow}
      toggle={toggleUserSelected}
    />
    {isRepositoriesShow && (
      <RepositoryList
        isLoading={isRepoLoading}
        repositories={repositories}
      />
    )}
  </div>
)

export default React.memo(UserRepositoriesCard)
