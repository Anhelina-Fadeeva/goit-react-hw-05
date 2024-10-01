import clsx from 'clsx';
import s from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  const changeClassLink = ({ isActive }) => {
    return clsx(s.navLink, isActive && s.activeLink);
  };

  return (
    <header className={s.navWrapper}>
      <Link to='/'>
        <h1 className={s.navTitle}>
          Good <span>Cinema</span>
        </h1>
      </Link>
      <nav className={s.nav}>
        <NavLink to='/' className={changeClassLink}>
          Home
        </NavLink>
        <NavLink to='/movies' className={changeClassLink}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
