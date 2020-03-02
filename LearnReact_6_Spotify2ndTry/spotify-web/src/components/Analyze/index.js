import React, { useState } from "react";
import RankingSongs from "./RankingSongs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import RankingArtists from "./RankingArtists";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  }
}));

const styles = {
  Paper: {
    textAlign:"center",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 200,
    width: 300,
    overflowY: "auto"
  }
};

export default ({ getData, token }) => {
  const [songs, setSongs] = useState({
    song1: undefined,
    song2: undefined
  });

  const [isSongs, setIsSong] = useState(true);

  const [arts, setArts] = useState({
    art1: undefined,
    art2: undefined
  });

  const handleChange = () => {
    setIsSong(!isSongs);
  };

  async function handleDemands(kindOf) {
    let s1, s2;

    await getData(token, "long_term", d => (s1 = d), kindOf);
    await getData(token, "short_term", d => (s2 = d), kindOf);

    if (isSongs) {
      setSongs({
        song1: s1,
        song2: s2
      });
    } else {
      setArts({
        art1: s1,
        art2: s2
      });
    }
  }

  if (isSongs) {
    if (!songs.song1) {
      handleDemands("tracks");
    }
  } else if (!arts.art1) {
    handleDemands("artists");
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isSongs ? (
        songs.song1 ? (
          <RankingSongs
            sg={songs.song1}
            title="Musics that you love the most of all time"
          />
        ) : (
          <CircularProgress />
        )
      ) : arts.art1 ? (
        <RankingArtists
          arts={arts.art1}
          title="Artists that you love the most of all time"
        />
      ) : (
        <CircularProgress />
      )}

      <Paper style={styles.Paper}>
          <Typography variant="h3" gutterBottom>
            POPULARITY
            <br />
            {isSongs ? songs.song1 ? songs.song1.moyRank + " | " + songs.song2.moyRank : <p> Loading... </p> : arts.art1 ? arts.art1.moyRank + " | " + arts.art2.moyRank : <p> Loading... </p>} 
          </Typography>

        <FormControlLabel
          control={<Switch checked={isSongs} onChange={handleChange} />}
          label="Artists or Songs"
        />
      </Paper>

      {isSongs ? (
        songs.song2 ? (
          <RankingSongs
            sg={songs.song2}
            title="Musics that you love the most currently"
          />
        ) : (
          <CircularProgress />
        )
      ) : arts.art2 ? (
        <RankingArtists
          arts={arts.art2}
          title="Artists that you love the most currently"
        />
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
