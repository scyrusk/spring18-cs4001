import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { Container, Image, Menu, Segment, Grid, Header } from 'semantic-ui-react'

import './App.css';

import HomePage from './pages/home-page'
import SchedulePage from './pages/schedule-page'
import HWAnalyzingArticlePage from './pages/hw-analyzing-article'
import HWDilemmaPage from './pages/hw-dilemma'
import HWCodePage from './pages/hw-code'
import HWTermPaperProposalPage from './pages/hw-term-paper-proposal'
import HWTermPaperOutlinePage from './pages/hw-term-paper-outline'
import HWTermPaperPage from './pages/hw-term-paper'
import AssignmentsPage from './pages/assignments-page'

import scheduleData from './data/schedule';

class App extends Component {
  render() {
    return (
      <div>
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' href="/" header>
              CS4001A - Spring 2018
            </Menu.Item>
            <Menu.Item as='a' href="/schedule">Schedule</Menu.Item>
            <Menu.Item as='a' href="/assignments">Assignments</Menu.Item>
          </Container>
        </Menu>

        <Container style={{ marginTop: '4em' }}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/schedule" component={SchedulePage} data={scheduleData} />
          <Route exact path="/hw-analyzing-article" component={HWAnalyzingArticlePage} />
          <Route exact path="/hw-dilemma" component={HWDilemmaPage} />
          <Route exact path="/hw-acm-code" component={HWCodePage} />
          <Route exact path="/hw-term-paper-proposal" component={HWTermPaperProposalPage} />
          <Route exact path="/hw-term-paper-outline" component={HWTermPaperOutlinePage} />
          <Route exact path="/term-paper" component={HWTermPaperPage} />
          <Route exact path="/assignments" component={AssignmentsPage} />
        </Container>

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='left'>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Header inverted as='h4' content='Instructor' />
                  <p>
                    <b>Name: </b>
                    Sauvik Das
                  </p>
                  <p>
                    <b>Email: </b>
                    sauvik@gatech.edu
                  </p>
                  <p>
                    <b>Office Hours: </b>
                    Wednesdays, from 1-2pm
                  </p>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header inverted as='h4' content='TA' />
                  <p>
                    <b>Name: </b>
                    Julia Deeb-Swihart
                  </p>
                  <p>
                    <b>Email: </b>
                    jdeeb3@gatech.edu
                  </p>
                  <p>
                    <b>Office Hours: </b>
                    By appointment, and will answer questions after class
                  </p>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header inverted as='h4' content='Location & Time' />
                  <p>
                    <b>Room: </b>
                    CCB 101
                  </p>
                  <p>
                    <b>Times: </b>
                    TR 1:30 - 2:45
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default withRouter(App);