import React from 'react'
import { CardUserType } from '../../types'
import ArrowUpIcon from '../../assets/icons/ArrowUpIcon'
import ArrowDownIcon from '../../assets/icons/ArrowDownIcon'

const CardUser = ({ name, isOpen, toggle }: CardUserType) => (
  <div
    onClick={(e) => toggle(e, name)}
    className='flex h-[36px] w-full cursor-pointer items-center justify-between bg-[#f1f1f1] px-[8px]'
    data-testid='user-card'
  >
    <h3 className='username text-[16px] font-semibold text-[#000]'>{name}</h3>
    <span className='cursor-pointer'>
      {isOpen ? (
        <ArrowDownIcon
          width={16}
          height={16}
        />
      ) : (
        <ArrowUpIcon
          width={16}
          height={16}
        />
      )}
    </span>
  </div>
)

export default React.memo(CardUser)
