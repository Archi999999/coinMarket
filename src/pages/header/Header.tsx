import { Link } from 'react-router-dom'

import { Button } from '@/shared/ui/button'
import { Typography } from '@/shared/ui/typography/Typography'

import s from './Header.module.scss'

import logo from './images/pngwing.com.png'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerLogo}>
        <Link to={'/'}>
          <img alt={'logo'} className={s.logo} src={logo} />
        </Link>
      </div>
      <div className={s.headerCoins}>
        <Button variant={'link'}>
          <Typography variant={'small_bold'}>second coin</Typography>
        </Button>
        <Button variant={'secondary'}>
          <Typography variant={'small_bold'}>second coin</Typography>
        </Button>
        <Button variant={'primary'}>
          <Typography variant={'small_bold'}>third coin</Typography>
        </Button>
        <Typography variant={'extra_large'}>first coin</Typography>
        <Typography variant={'small_bold'}>second coin</Typography>
      </div>
      <div className={s.headerPortfolio}> Here will be portfolio</div>
    </header>
  )
}
