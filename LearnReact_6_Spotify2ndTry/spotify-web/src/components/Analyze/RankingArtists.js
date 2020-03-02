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

export default ({ arts, title }) => {
  const classes = useStyles();

  return (
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"> {title} </ListSubheader>
        </GridListTile>
        {arts.items.map(artiste => (
          <GridListTile key={artiste.name}>
            <img src={artiste.images[1].url} alt={artiste.name} />
            <GridListTileBar
              title={artiste.name}
              subtitle={
                <span>
                  {   }
                  Rank: {artiste.rank} Popularity: {artiste.popularity}
                </span>
              }
              actionIcon={
                <IconButton
                  aria-label={`info about ${artiste.name}`}
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
