import React, { useState } from "react";
import RankingSongs from "./RankingSongs";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
}));

const styles = {
  Paper: {
    display : "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 200,
    width:300,
    overflowY: "auto"
  }
};

export default ({getData,token}) => {
  

  const [data,setData] = useState({
    song1:undefined,
    song2:undefined,
    isSongs:true,
  })

  const handleChange = () => {
    setData({
      song1 :data.song1,
      song2: data.song2,
      isSongs:!data.isSongs,
    })
  }
  
  async function handleDemands () {

    let s1,s2;

    await getData(token,"long_term",(d) => s1 = d);
    await getData(token,"short_term",(d) => s2 = d);

    setData({
      song1 : s1,
      song2 : s2,
    })
  };

  if(!data.song1){
    handleDemands();
  }
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {data.song1 ? <RankingSongs sg = {data.song1} title = "Musics that you love the most of all time" />
      : <CircularProgress />}

      <Paper style={styles.Paper}>
      {data.song1 ?
      <Typography variant="h3" gutterBottom>
      POPULARITY<br/>
      {data.song1.moyRank + " | " + data.song2.moyRank}
      </Typography>  
      : <p> Loading... </p>}

      <FormControlLabel
        control={
          <Switch checked={data.isSongs} onChange={handleChange}  />
        }
        label="Songs / Artists"
      />
      </Paper>

      {data.song2 ? <RankingSongs sg = {data.song2} title = "Musics that you love the most actually" />
      : <CircularProgress /> }
    </div>  
  );
};
