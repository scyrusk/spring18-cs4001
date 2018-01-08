import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default class Intro extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as='h1' content="Course Description" />
        <p>
          In this class, I’ll teach you how to be a responsible and ethical computing professional.
          You'll learn about ethics, how to construct well-reasoned arguments, and about how to apply
          workable ethical frameworks to difficult problems regarding computing and society. We'll start
          by learning foundational ethical frameworks, and gradually apply these frameworks to navigate
          difficult real world scenarios in which computing affects society. By the end of the course,
          you won’t have all the answers to the ethical dilemmas facing society, but you should have
          the tools necessary to responsibly approach ethical dilemmas you may face in the workplace.
        </p>
      </Segment>
    );
  }
}