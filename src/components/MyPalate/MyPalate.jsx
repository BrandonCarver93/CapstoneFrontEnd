import React, { Component } from 'react';
import quizQuestions from '../api/quizQuestions';
import Quiz from './Quiz';
import Result from './Result';


class MyPalate extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      
      };
  
    
    render() {
      return (
        <div className="MyPalate">
          <div className="MyPalate-header">
            <h1>Quiz time: Discover your favorite wine!</h1>
          </div>
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      );
    }
  }
} 
  export default MyPalate;