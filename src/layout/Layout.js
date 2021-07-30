import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <>
					<NavBar />
					<SearchBar />
					<main className={classes.main}>{props.children}</main>

        </>
    );
};

export default Layout;