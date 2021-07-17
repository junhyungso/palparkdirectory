import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
      <header className={classes.header}>
				<NavLink to='/' className={classes.logo}>PalPark Directory</NavLink>
				<nav className={classes.nav}>
					<ul>
							<NavLink to='/restaurants' activeClassName={classes.active} >Restaurants</NavLink>
							<NavLink to='/doctors' activeClassName={classes.active}>Doctor's Office</NavLink>
							<NavLink to='/entertainment' activeClassName={classes.active} >Entertainment</NavLink>
							<NavLink to='/others' activeClassName={classes.active}>Others</NavLink>
					</ul>
				</nav>
      </header>

    );
};

export default NavBar;