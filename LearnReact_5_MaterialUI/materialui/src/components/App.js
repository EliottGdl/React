import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import {muscles,exercises} from "../store.js";


export default class extends Component {

  state = {
    exercises,
    exercise : {}
  }

  getExercisesByMuscles() {
     const results = 
      this.state.exercises.reduce((exercises,exo) => {
      const {muscles} = exo

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles],exo] : [exo] 
      return exercises
    }, {})
    return Object.entries(results);
  }

  handleCategorySelected = category => {
    this.setState({
        category
    })
  }

  handleExerciseSelected = id => {
    this.setState((previous)=>({
      exercise:previous.exercises.find(ex => ex.id === id)  
    }))
  }

  render() {

    const exercises = this.getExercisesByMuscles(),
    {category,exercise} = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises 
          exercise = {exercise}
          category = {category}
          exercises = {exercises}
          onSelect = {this.handleExerciseSelected}
        />
        <Footer 
          category = {category}
          muscles = {muscles}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
    );
  }
}
