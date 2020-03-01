import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default ({getData,token}) => {
  
  const classes = useStyles();

  const [songs,setSongs] = useState({
    song1:undefined,
    song2:undefined,
  })
  
  async function handleDemands () {

    let s1,s2;

    await getData(token,"long_term",(d) => s1 = d);
    await getData(token,"short_term",(d) => s2 = d);

    setSongs({
      song1 : s1,
      song2 : s2,
    })
  };

  if(!songs.song1){
    handleDemands();
  }
  

  return (
    <div className={classes.root}>


      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"> Musics that you love the most of all time </ListSubheader>
        </GridListTile>
        {songs.song1 ? songs.song1.items.map(song => (
          <GridListTile key={song.name}>
            <img src={song.album.images[1].url} alt={song.name} />
            <GridListTileBar
              title={song.name}
              subtitle={<span> Rank : {song.rank} Popularity : {song.popularity}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${song.name}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        )) : <p> Loading </p>}
      </GridList>

      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
          <ListSubheader component="div"> Musics that you love the most actually </ListSubheader>
        </GridListTile>
        {songs.song2 ? songs.song2.items.map(song => (
          <GridListTile key={song.name}>
            <img src={song.album.images[1].url} alt={song.name} />
            <GridListTileBar
              title={song.name}
              subtitle={<span> Rank : {song.rank} Popularity : {song.popularity}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${song.name}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        )) : <p> Loading </p>}
      </GridList>

    </div>
  );
};
