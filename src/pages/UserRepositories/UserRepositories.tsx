import React, { useState } from 'react'
import { getListUser } from '../../services'
import { GitHubUserType } from '../../types'
import UserRepositoriesList from '../../components/UserRepositoriesList/UserRepositoriesList'
import UserSearchForm from '../../components/UserSearchForm/UserSearchForm'

function UserRepositories() {
  const [users, setUsers] = useState<GitHubUserType[]>([])
  const [isUserLoading, setIsUserLoading] = useState(false)

  const getUsers = async (username: string) => {
    try {
      setIsUserLoading(true)
      const response = await getListUser(username)
      setUsers(response.items)
      setIsUserLoading(false)
    } catch (error) {}
  }

  return (
    <div className='flex min-h-[100vh] min-w-[100vw] items-start justify-center'>
      <div className='container h-full w-full space-y-[16px] p-[20px]'>
        <UserSearchForm onSubmit={getUsers} />
        <UserRepositoriesList
          users={users}
          isLoading={isUserLoading}
        />
      </div>
    </div>
  )
}

export default UserRepositories
