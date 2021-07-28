import classes from './SearchBar.module.css';


const SearchBar = (props) => {
		return (

						<form className={classes.form}>
							<label>Search: </label>
							<input />
							<button className='btn'>Submit</button>
						</form>
		);
}

export default SearchBar;