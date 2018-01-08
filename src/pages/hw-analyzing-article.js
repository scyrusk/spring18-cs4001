import React, { Component } from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class HWAnalyzingArticlePage extends Component {
  render() {
    const suggestedTopics = (
      <List bulleted>
        <List.Item>Should violent video games be banned, or their sale restricted to minors?</List.Item>
        <List.Item>Should cell phone use be banned in cars?</List.Item>
        <List.Item>Should access to social networks be blocked in schools?</List.Item>
        <List.Item>Any topic about computing and society of your choice.</List.Item>
      </List>
    );

    const questions = (
      <List ordered>
        <List.Item>Who is the author? What is the place of publication? What do those things tell you about the point of view of the article?</List.Item>
        <List.Item>What facts underlie the argument of the article? How are those facts documented? Are any of the things presented as facts disputable?</List.Item>
        <List.Item>What values, beliefs, and assumptions are implicit in the article?</List.Item>
        <List.Item>To really understand the issues better, what facts would you like to know/know more about?</List.Item>
        <List.Item>How does the author use language to help make the point?</List.Item>
        <List.Item>What might someone on the other side of the controversy argue? List three key points.</List.Item>
      </List>
    )

    return (
      <div>
        <Header as='h1' content='HW1: Analyzing the Argument of an Article'/>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Due</Table.Cell>
              <Table.Cell>January 23rd, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Format</Table.Cell>
              <Table.Cell>Approximately 3 pages, double spaced, 12 pt font</Table.Cell>
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
                  <List.Item>Insight into content issues</List.Item>
                  <List.Item>Insight into form (writing) issues</List.Item>
                </List>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <p>
          Pick a short article (approximately 500 to 2000 words long) available online that takes
          a strong position on a controversial issue about computing and society. Anything with any
          kind of computer chip in it counts as "computing."
        </p>

        <p>Some suggestions for article topics include:</p>

        { suggestedTopics }

        <p>Answer these questions about the article:</p>

        { questions }

        <p>
          Please write this as one coherent essay that addresses all these points (not a set of
          answers to individual questions.) Use correct, clear English in writing your answers.
          Style counts.
        </p>

        <p>
          Hand in a paper copy of the article with your homework. Include the URL where you
          found the article on your assignment.
        </p>

        <p><b>Come to class prepared to discuss your article.</b></p>
      </div>
    )
  }
}