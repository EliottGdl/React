import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  gridList: {
    width: 400,
    height: 600
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
      <GridList cellHeight={180} className={classes.gridList}>
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
      
  );
};
