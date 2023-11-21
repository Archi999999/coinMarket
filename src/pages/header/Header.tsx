import s from './Header.module.scss'
import logo from './images/pngwing.com.png'
import {Link} from "react-router-dom";
import {Typography} from "@/shared/ui/typography";
export const Header = () => {



  return <header className={s.header}>
    <div className={s.headerLogo}>
      <Link to={'/'}><img className={s.logo} src={logo}/></Link>
    </div>
    <div className={s.headerCoins}>
      <Typography variant={"extra_large"}>hello</Typography>
      <Typography variant={"small_bold"}>hello</Typography>

    </div>
    <div className={s.headerPortfolio}> Here will be portfolio</div>
  </header>
}
