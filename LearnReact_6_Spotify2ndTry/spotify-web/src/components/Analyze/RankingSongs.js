import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 500,
    backgroundColor:"white",
    height: 810,
    paddingTop:5,
    paddingBottom:5,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default ({ sg, title }) => {
  const classes = useStyles();

  const handleClick = () => {

  }

  return (
    <Paper style={{marginTop:20,backgroundColor: 'rgba(0,0,0,0)'}}>
      <GridList cellHeight={250} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"> {title} </ListSubheader>
        </GridListTile>
        {sg.items.map(song => (
          <GridListTile key={song.name}>
            <img src={song.album.images[1].url} alt={song.name} />
            <GridListTileBar
              title={song.name}
              subtitle={
                <span>
                  {" "}
                  Rank : {song.rank} Popularity: {song.popularity}
                </span>
              }
              actionIcon={
                <IconButton
                  onClick={handleClick}
                  aria-label={`info about ${song.name}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </Paper>
  );
};
