import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../images/logo.svg'
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width:"100%",
      maxWidth: "1500px"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    image:{
      width: "40px",
      height:"40px"
    }
  }),
);

export default function NavBar({name, shopType} : any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} className={classes.image}/> 
          {/* <Typography> {name}'s {shopType} </Typography> */}
          <Button color="inherit">Tables</Button>
          <DropDownMenu />
          <Button color="inherit">REPORTS</Button>
          <Button color="inherit">HELP</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
