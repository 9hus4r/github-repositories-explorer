import React, { useEffect, useRef, useState } from 'react'
import { getListRepoByUsername, getListUser } from '../services'
import { GitHubUserType, GithubUserRepoType } from '../types'
import SearchForm from '../components/SearchForm'
import { RepoLoading, UserLoading } from '../components/Loading'
import CardUser from '../components/CardUser'
import CardRepo from '../components/CardRepo'

function Main() {
  const [users, setUsers] = useState<GitHubUserType[]>([])
  const [userSelected, setUserSelected] = useState('')
  const [repositories, setRepositories] = useState<GithubUserRepoType[]>([])
  const [userLoading, setUserLoading] = useState(false)
  const [repoLoading, setRepoLoading] = useState(false)
  let userRef = useRef<any>()

  useEffect(() => {
    (async () => {
        try {
            if (userSelected != '') await getUserRepos()
        } catch (error) {
            
        }
    })()
  }, [userSelected])

  const getUsers = async (username: string) => {
    try {
      setUserLoading(true)
      const response = await getListUser(username)
      setUsers(response.items)
      setUserLoading(false)
    } catch (error) {}
  }

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
    <div className='flex min-h-[100vh] min-w-[100vw] items-start justify-center'>
      <div className='container h-full w-full space-y-[16px] p-[20px]'>
        <SearchForm onSubmit={(username: string) => getUsers(username)} />
        <div className='flex w-full flex-col space-y-[12px]'>
          {users.length > 0 &&
            userLoading == false &&
            users?.map((user: any) => (
              <div className='flex w-full flex-col space-y-[12px]'>
                <CardUser
                  name={user?.login}
                  isOpen={userSelected == user.login}
                  toggle={toggleUserSelected}
                />
                {userSelected == user.login && repositories?.length > 0 && !repoLoading && (
                  <div className='flex flex-col space-y-[8px]'>
                    {repositories.map((repo: any) => (
                      <CardRepo
                        name={repo.name}
                        stars_count={repo.stargazers_count}
                        description={repo.description}
                      />
                    ))}
                    
                  </div>
                )}
                {userSelected == user.login && repositories?.length == 0 && !repoLoading && (
                  <div className='text-center'>
                    <span>No Repositories Available</span>
                  </div>
                )}
                {userSelected == user.login && repoLoading && <RepoLoading />}
              </div>
            ))}
          {userLoading && <UserLoading />}
        </div>
      </div>
    </div>
  )
}

export default Main
