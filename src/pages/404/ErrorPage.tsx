import { useNavigate } from 'react-router-dom'

import { ErrorImage } from '@/assets/icons/ErrorImage'
import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography'

import s from './ErrorPage.module.scss'
export const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className={s.root}>
      <div className={s.textButton}>
        <Typography as={'h1'} className={s.text} variant={'extra_large_bold'}>
          {'Go Home, \n You’re Drunk!'}
        </Typography>
        <Button
          onClick={() => {
            navigate('./')
          }}
          variant={'primary'}
        >
          BACK TO HOME
        </Button>
      </div>
      <div className={s.image}>
        <ErrorImage />
      </div>
    </div>
  )
}
