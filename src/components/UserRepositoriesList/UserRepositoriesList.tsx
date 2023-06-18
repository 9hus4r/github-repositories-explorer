import React, { useEffect, useRef, useState } from 'react'
import { getListRepoByUsername } from '../../services'
import { GitHubUserType, GithubUserRepoType } from '../../types'
import UserRepositoriesCard from '../UserRepositoriesCard/UserRepositoriesCard'
import { UserLoading } from '../Loading'

const UserRepositoriesList = ({ users, isLoading }: { users: GitHubUserType[]; isLoading?: boolean }) => {
  const [userSelected, setUserSelected] = useState('')
  const [repositories, setRepositories] = useState<GithubUserRepoType[]>([])
  const [repoLoading, setRepoLoading] = useState(false)
  let userRef = useRef<any>()

  useEffect(() => {
    ;(async () => {
      try {
        if (userSelected != '') await getUserRepos()
      } catch (error) {}
    })()
  }, [userSelected])

  const getUserRepos = async () => {
    try {
      setRepoLoading(true)
      const repos = await getListRepoByUsername(userSelected)
      setRepositories(repos)
      setRepoLoading(false)
      scrollToActiveUser()
    } catch (error) {}
  }

  const scrollToActiveUser = () =>
    setTimeout(
      () =>
        window.scrollTo({
          top: userRef.current.getBoundingClientRect().top + window.scrollY - 20,
          left: userRef.current.getBoundingClientRect().left + window.scrollX,
          behavior: 'smooth',
        }),
      100
    )

  const toggleUserSelected = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, log: string) => {
    userRef.current = e.target
    if (userSelected == log) {
      setUserSelected('')
      setRepositories([])
      return
    }
    setUserSelected(log)
  }

  return (
    <div className='flex w-full flex-col space-y-[12px]'>
      {users.length > 0 &&
        isLoading == false &&
        users?.map((user: GitHubUserType) => (
          <UserRepositoriesCard
            user={user}
            isRepositoriesShow={userSelected == user.login}
            toggleUserSelected={toggleUserSelected}
            isRepoLoading={repoLoading}
            repositories={repositories}
          />
        ))}
      {isLoading && <UserLoading />}
    </div>
  )
}

export default React.memo(UserRepositoriesList)
