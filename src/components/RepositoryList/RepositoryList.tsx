import React from 'react'
import RepositoryCard from '../RepositoryCard/RepositoryCard'
import { RepositoryListType } from '../../types'
import { RepoLoading } from '../Loading'

const RepositoryList = ({ repositories, isLoading }: RepositoryListType) =>
  isLoading ? (
    <RepoLoading />
  ) : repositories.length > 0 ? (
    <div className='flex flex-col space-y-[8px]'>
      {repositories.map((repo: any) => (
        <RepositoryCard
          key={repo.id}
          name={repo.name}
          stars_count={repo.stargazers_count}
          description={repo.description}
        />
      ))}
    </div>
  ) : (
    <div className='text-center'>
      <span>No Repositories Available</span>
    </div>
  )

export default React.memo(RepositoryList)
