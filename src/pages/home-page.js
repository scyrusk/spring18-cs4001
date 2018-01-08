import React, { Component } from 'react';

import Intro from '../components/intro';
import Structure from '../components/structure';
import LearningObjectives from '../components/learning-objectives';
import RequiredTexts from '../components/required-texts';
import Grading from '../components/grading';
import ClassPolicies from '../components/class-policies';
import Acknowledgements from '../components/acknowledgments';

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Intro />
        <LearningObjectives />
        <RequiredTexts />
        <Grading />
        <ClassPolicies />
        <Acknowledgements />
      </div>
    )
  }
}