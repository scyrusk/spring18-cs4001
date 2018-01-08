import React, { Component } from 'react';
import { Icon, Segment, Header, List } from 'semantic-ui-react';

export default class Structure extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as='h1' content="Structure" />
        <List>
          <List.Item as="span">
            <Icon name='right triangle' />
            I’ll teach you about ethics and how to construct an argument through a series of lectures,
            in-class discussions and activities. The in-class discussions are important, so attendance is mandatory.
          </List.Item>
          <List.Item as="span">
            <Icon name='right triangle' />
            Each class may have an assigned reading. Readings are mandatory and should be done before the class.
          </List.Item>
          <List.Item as="span">
            <Icon name='right triangle' />
            You’ll write a term paper in which you will take and support a position on an issue about computing
            and society on which you are initially undecided.
          </List.Item>
          <List.Item as="span">
            <Icon name='right triangle' />
            You’ll have five homework assignments in which you will practice and demonstrate this skills.
            Two of these assignments, the term paper proposal and outline, pertain to your term paper.
          </List.Item>
          <List.Item as="span">
            <Icon name='right triangle' />
            You’ll write a midterm and final exam.
          </List.Item>
        </List>
      </Segment>
    );
  }
}