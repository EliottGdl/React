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

  handleCategorySelect = category => {
    this.setState({
        category
    })
  }

  handleExerciseSelect = id => {
    this.setState((previous)=>({
      exercise:previous.exercises.find(ex => ex.id === id)  
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercise }) => ({
      exercises : [
        ...exercises,
        exercise
      ]
    }))
  }

  render() {

    const exercises = this.getExercisesByMuscles(),
    {category,exercise} = this.state;
    return (
      <Fragment>
        <Header 
          muscles = {muscles}
          onExerciseCreate = {this.handleExerciseCreate}
        />
        <Exercises 
          exercise = {exercise}
          category = {category}
          exercises = {exercises}
          onSelect = {this.handleExerciseSelect}
        />
        <Footer 
          category = {category}
          muscles = {muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
