import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const RepoLoading = () => (
  <div className='w-full pl-[16px]'>
    {[1, 2, 3, 4, 5].map((item) => (
      <Skeleton
        key={Math.random() * item}
        className='h-[100px] w-full'
      />
    ))}
  </div>
)

export const UserLoading = () => (
  <>
    {[1, 2, 3, 4, 5].map((item) => (
      <Skeleton
        key={Math.random() * item}
        className='h-[36px] w-full'
      />
    ))}
  </>
)
