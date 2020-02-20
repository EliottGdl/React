import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import {muscles,exercises} from "../store.js";


export default class extends Component {

  state = {
    exercises 
  }

  getExercisesByMuscles() {
    return this.state.exercises.reduce((exercises,exercise) => {
      const {muscles} = exercise

      console.log(exercises[muscles])
      exercises[muscles] = exercises[muscles] ? [...exercises[muscles],exercises] : [exercise]

      return exercises
    }, {})
  }

  render() {
    
    this.getExercisesByMuscles()

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
