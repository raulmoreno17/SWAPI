import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BackBar from "../Atoms/BackBar";

// Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CakeIcon from '@mui/icons-material/Cake';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WcIcon from '@mui/icons-material/Wc';
import PaletteIcon from '@mui/icons-material/Palette';
import HeightIcon from '@mui/icons-material/Height';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import OpacityIcon from '@mui/icons-material/Opacity';

const CharacterDetail = () => {
  const location = useLocation();
  const character = location.state;
  return (
    <div>
      <BackBar to="/"></BackBar>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ mt: 4, mb: 2, textAlign: "center" }}
            variant="h6"
            component="div"
          >
            {character.name}
          </Typography>
          <Box
            sx={{ boxShadow: 3, margin:'20px'}}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <List>
              <ListItem>
                <ListItemIcon>
                  <CakeIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Birth Year"
                  secondary={character.birth_year}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Eye Color"
                  secondary={character.eye_color}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <WcIcon />
                </ListItemIcon>
                <ListItemText primary="Gender" secondary={character.gender} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <PaletteIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Hair Color"
                  secondary={character.hair_color}
                />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <HeightIcon />
                </ListItemIcon>
                <ListItemText primary="Height" secondary={character.height} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <FitnessCenterIcon />
                </ListItemIcon>
                <ListItemText primary="Mass" secondary={character.mass} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <OpacityIcon />
                </ListItemIcon>
                <ListItemText
                  primary="Skin Color"
                  secondary={character.skin_color}
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default CharacterDetail;
