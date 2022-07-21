import {  TextField, IconButton, makeStyles } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

import { SearchOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    textfield_input: {
        color: `#c5cae9 !important`,
    },
  }));



const Navbar = () => {
    const classes = useStyles();
    return (  
        <nav className="navbar">
            <h1>StreamZzer</h1>
            <div className="links">
                <a href="/Home">Home</a>
                <a href="/">Series</a>
                <a href="/">Movies</a>
                <a href="/">Anime</a>
            </div>
            <div className="searchBar">
            <TextField 
              required
              label="Search here"
              variant="filled"
              inputProps={{className: classes.textfield_input}}
              color="secondary"
              focused/>
            </div>

        </nav>
    );
}
 
export default Navbar;