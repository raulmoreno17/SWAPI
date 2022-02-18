import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const SearchBox = (props) => {

  const icon = <SearchIcon />;
  return (
    <Paper component="form">
          <TextField
            id="filled-basic"
            label="Search a character"
            variant="filled"
            placeholder="Who are you looking for?"
            fullWidth
            InputProps={{
              endAdornment: icon
            }}
            onChange={props.onChange}
          />
    </Paper>
  );
};

export default SearchBox;