import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import SideMenu from './SideMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpened(true)}
          >
            <MenuIcon />
            <Drawer
              anchor={'left'}
              open={drawerOpened}
              onClose={() => setDrawerOpened(false)}
            >
              <SideMenu />
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            へっだー
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
