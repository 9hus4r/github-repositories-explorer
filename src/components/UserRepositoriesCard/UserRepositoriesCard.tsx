import React from 'react'
import UserCard from '../UserCard/UserCard'
import RepositoryList from '../RepositoryList/RepositoryList'
import { UserRepositoriesCardType } from '../../types'

const UserRepositoriesCard = ({
  user,
  isRepositoriesShow,
  toggleUserSelected,
  isRepoLoading,
  repositories,
}: UserRepositoriesCardType) => (
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
