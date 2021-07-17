import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <>
					<SearchBar />
					<NavBar />
					<main className={classes.main}>{props.children}</main>

        </>
    );
};

export default Layout;