import React, { Component } from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class HWTermPaperProposalPage extends Component {
  render() {
    const criteria = (
      <List ordered>
        <List.Item>Identify the issue you have chosen</List.Item>
        <List.Item>Explain why you are interested in the issue,</List.Item>
        <List.Item>Explain why you are undecided about the issue, and</List.Item>
        <List.Item>Identify a few initial information sources you will examine to begin to research the issue. List at least three refereed sources--either journal articles or conference papers.</List.Item>
      </List>
    );

    const examples = (
      <List bulleted>
        <List.Item>The increasing use of social media in personal, business and marketing fields. Is the use too much?</List.Item>
        <List.Item>Are we beginning to depend too much on our computers, tablets and smartphones?</List.Item>
        <List.Item>Is the use of computers in schools as early as elementary schools a good thing?</List.Item>
        <List.Item>Is the growth of the use of Internet a good or bad thing?</List.Item>
        <List.Item>Does using Facebook too much make us depressed?</List.Item>
        <List.Item>Should the rise in mental illnesses be blamed on the rise in the use of technology?</List.Item>
        <List.Item>Has the option of online studies decreased the value of face-to-face learning?</List.Item>
        <List.Item>Will video games be used as teaching tools in the future?</List.Item>
        <List.Item>Has the use of phones from a young age decreased the desire to go outside and have a face-to-face interaction?</List.Item>
        <List.Item>Is it a good thing that we are increasingly using robots in our lives?</List.Item>
        <List.Item>The use of drones to conduct projects outside of the military. Is it a good idea?</List.Item>
        <List.Item>Are self-driving cars beneficial or detrimental to society?</List.Item>
        <List.Item>Has technology changed the way that we look at books? Is this a good or bad thing?</List.Item>
        <List.Item>How young is too young to learn how to use a computer or to own a tablet?</List.Item>
      </List>
    );

    return (
      <div>
        <Header as='h1' content='HW4: Term Paper Proposal'/>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Due</Table.Cell>
              <Table.Cell>February 15th, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Format</Table.Cell>
              <Table.Cell>Approximately 2 pages, double spaced, 12 pt font</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Logistics</Table.Cell>
              <Table.Cell>Hand in a paper copy at the start of class <i>and</i> submit as a PDF on TSquare</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Grading Criteria</Table.Cell>
              <Table.Cell>
                <List bulleted>
                  <List.Item>Completeness</List.Item>
                  <List.Item>Writing</List.Item>
                  <List.Item>Quality of references</List.Item>
                  <List.Item>Quality of argument</List.Item>
                </List>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <p>
          For your term paper, you will research an issue about computing and society that you are initially undecided about.
          In your paper, you will take a position on that issue and support that position. Your paper should be approximately ten pages long.
        </p>

        <p>
          For this assignment, you will be required to present a proposal for this investigation. In your proposal, you
          should do the following:
        </p>

        { criteria }

        <p>
          Make sure to pick a topic that others have written about. You are being graded on how
          well you research the issue and cite the literature about it. If there's little to cite, you will
          have trouble with this assignment.
        </p>

        <p>
          A refereed source is something that has gone through peer review--like a journal article or
          most conference papers. Books and jouralistic articles do not count. For each reference you provide,
          please provide the full, correct reference in APA format, and include the URL where it can be found,
          if it is available online.
        </p>

        <p>
          Here is a list of computing and society oriented argumentative topics (taken from <a href="http://www.munmund.net" target="_blank">Munmun</a>).
          You can pick something from here if you like, but this are simply examples. You may pick any topic that you care about:
        </p>

        { examples }
      </div>
    )
  }
}