import React from 'react';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';

const useStyles = makeStyles((theme) => ({
    carrusel_elemento: {
        opacity: 0,
        position: "absolute",
        top: 0,
        zIndex: 100
    },
    active: {
        opacity: 1,
        position: "relative",
        zIndex: 900,
        width: "100%",
        margin: "auto",
        transition: "transform .5s, opacity .5s, z-index .5s",
        display: "flex",
        alignItems: "center",
        
        justifyContent: "space-around",
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    },
    previous: {
        transform: "translateX(-100%)"
    },
    next: {
        transform: "translateX(100%)"
    }
}));

export const ContentSliderEvent = ({eventTitle,eventDate,active,previous,next}) => {
    const classes = useStyles();

    return  <div className={classnames("events__contentSliderDataInfo" && active ? classes.active : classes.carrusel_elemento, previous ? classes.previous : "", next ? classes.next : "")}>
                <div className='events__contentSliderDataInfoTitle'>
                    <h1>{eventTitle}</h1>
                </div>
                <h1 className='events__contentSliderDataInfoTime'>{eventDate}</h1>
            </div>
        
};
