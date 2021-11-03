import React from 'react';
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NotificationsNoneTwoToneIcon from "@mui/icons-material/NotificationsNoneTwoTone";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

import {Link} from "react-router-dom";
import {makeStyles} from "@mui/material";

const PanelFloatBtn = () => {
    const useStyles = makeStyles({
        violet: {
            background: 'linear-gradient(45deg, #815AC0 40%,  #323e73 90%)',
            color: 'white',
        },
        yellow:{
            background: 'linear-gradient(45deg, #E79037 20%,  #EEDE0A 90%)',
            color: 'white',
        },
        green:{
            background: 'linear-gradient(45deg, #198643 40%,  #3C6E71 90%)',
            color: 'white',
        },
    });
    const classes = useStyles();
    return (
        <>
            <Box sx={{'& > :not(style)': {m: 1}}}>
                <Fab size="small" className={classes.violet} aria-label="edit">
                    <NotificationsNoneTwoToneIcon/>
                </Fab>
                <Link to={"/dashboard/edit"}>
                    <Fab size="small" className={classes.yellow} aria-label="edit">
                        <EditTwoToneIcon/>
                    </Fab>
                </Link>
                <Link to={"/"}>
                    <Fab size="small" className={classes.green} aria-label="edit">
                        <HomeTwoToneIcon  />
                    </Fab>
                </Link>
            </Box>
        </>
    );
};

export default PanelFloatBtn;
