import React from 'react'
import { CardRepoType } from '../types'
import StarIcon from '../assets/icons/StartIcon'

const CardRepo = ({ name, stars_count, description }: CardRepoType) => {
  return (
    <div className='ml-[16px] min-h-[100px] w-[calc(100%-16px)] bg-[#d9d9d9] px-[8px] py-[12px]'>
      <div className='flex justify-between'>
        <span className='text-[16px] font-bold'>{name}</span>
        <div className='flex items-center space-x-[8px]'>
          <span className='text-[16px] font-bold'>{stars_count}</span>
          <StarIcon
            width={16}
            height={16}
          />
        </div>
      </div>
      <p className='text-[14px]'>{description}</p>
    </div>
  )
}

export default React.memo(CardRepo)
