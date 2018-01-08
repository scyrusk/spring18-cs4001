import React, { Component } from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class HWDilemmaPage extends Component {
  render() {
    const dilemma = (
      <div>
        <p>Consider this ethical dilemma:</p>
        <p>
          The summer camp you have attended since you were very young has just added a computer activity.
          You've been hired to be the camp's first "computer counselor." It's 1983. The computers are Apple IIe's.
          The web hasn't been invented yet. The machines have no Internet access. There is no LAN--software has
          to be loaded onto each machine individually from floppy disks.
        </p>
        <p>
          You arrive two days before the campers, and between endless counselor training meetings you have a few
          hours to set up the computer lab. You discover that all the software you have is on floppies with
          hand-written labels, no documentation. Suspicious, you approach the director of the camp, Lou: was
          the software purchased or just copied? Lou says it was just copied. You politely tell him that you need
          legal copies, and a license for each machine. He refuses, and tells you that you're being "uptight."
        </p>
        <p>
          Campers arrive tomorrow. There's really nothing you can do with an Apple IIe without software.
          You don't have a development environment. You don't have money to buy software yourself.
          And you can't seek donations--the camp caters to well-off kids, not the underprivileged.
        </p>
        <p>
          Do you install the copied software on the machines? Or do you leave the machines blank and tell
          the kids who arrive you're sorry but they should try another activity? Do you quit your job?
          What other courses of action might you consider?
        </p>
      </div>
    )

    const questions = (
      <List ordered>
        <List.Item>What would an act-utilitarian analysis suggest you do? Why?</List.Item>
        <List.Item>What would a rule-utilitarian analysis suggest you do? Why?</List.Item>
        <List.Item>What would a deontological analysis suggest you do? Why?</List.Item>
        <List.Item>What would social contract theory suggest you do? Why?</List.Item>
        <List.Item>What would an analysis from virtue ethics suggest you do? Why?</List.Item>
        <List.Item>Combine these different perspectives and provide a well-reasoned argument for a course of action.</List.Item>
        <List.Item>Comment on noteworthy strengths and weaknesses of the different theories that came up in your analysis. Pick one noteworthy strength of one theory, and one weakness of a theory, and discuss.</List.Item>
      </List>
    )

    return (
      <div>
        <Header as='h1' content='HW2: Applying Different Ethical Frameworks to a Dilemma'/>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Due</Table.Cell>
              <Table.Cell>February 1st, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Format</Table.Cell>
              <Table.Cell>Approximately 4 pages, double spaced, 12 pt font</Table.Cell>
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
                  <List.Item>Insight into each ethical theory</List.Item>
                  <List.Item>Individual ethical analysis</List.Item>
                </List>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        { dilemma }
        { questions }

        <p>
          Answer each question separately.
        </p>
      </div>
    )
  }
}