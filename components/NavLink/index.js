import classes from './style.module.scss'
import Link from 'next/link'

const NavLink = ({href, text}) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={classes.link}>{text}</a>
    </Link>
  )
}

export default NavLink