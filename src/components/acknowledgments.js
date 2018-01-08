import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default class Acknowledgements extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as='h1' content="Acknowledgements" />
        <p>
          Class materials were either borrowed or  heavily adapted
          from <a href="http://www.cc.gatech.edu/~asb" target="_blank">Amy Bruckman</a> and <a href="http://www.munmund.net/" target="_blank">Munmun De Choudhury</a>.
        </p>
      </Segment>
    );
  }
}