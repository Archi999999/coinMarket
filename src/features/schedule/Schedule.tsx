import { FC } from 'react'

import s from './schedule.module.scss'

type Props = {
  id: string
  value: string
}

export const Schedule: FC<Props> = ({ id, value }) => {
  return (
    <div className={s.schedule}>
      period: {value} ID:{id}
    </div>
  )
}
