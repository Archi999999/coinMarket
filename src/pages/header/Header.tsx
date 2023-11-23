import s from './Header.module.scss'
import logo from './images/pngwing.com.png'
import { Link } from 'react-router-dom'
import { Typography } from '@/shared/ui/typography/Typography'
import { Button } from '@/shared/ui/button'

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.headerLogo}>
        <Link to={'/'}>
          <img className={s.logo} src={logo} alt={'logo'} />
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
