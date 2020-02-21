import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import {muscles,exercises} from "../store.js";


export default class extends Component {

  state = {
    exercises 
  }

  getExercisesByMuscles() {
     const results = 
      this.state.exercises.reduce((exercises,exercise) => {
      const {muscles} = exercise

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles],exercise] : [exercise] 
      return exercises
    }, {})
    return Object.entries(results);
  }

  render() {

    const exercises = this.getExercisesByMuscles();

    return (
      <Fragment>
        <Header />
        <Exercises 
          exercises = {exercises}
        />
        <Footer 
          muscles = {muscles}
        />
      </Fragment>
    );
  }
}
