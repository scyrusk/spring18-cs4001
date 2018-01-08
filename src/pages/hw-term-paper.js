import React, { Component } from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class HWTermPaperPage extends Component {
  render() {
    return (
      <div>
        <Header as='h1' content='Term Paper'/>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Due</Table.Cell>
              <Table.Cell>April 12th, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Format</Table.Cell>
              <Table.Cell>Approximately 10 pages, double spaced, 12 pt font</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Logistics</Table.Cell>
              <Table.Cell>Hand in a paper copy at the start of class <i>and</i> submit as a PDF on TSquare</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Grading Criteria</Table.Cell>
              <Table.Cell>
                <List bulleted>
                  <List.Item>Writing</List.Item>
                  <List.Item>Quality of research</List.Item>
                  <List.Item>Insight into computing and society issues</List.Item>
                  <List.Item>Bibliography</List.Item>
                </List>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <p>
          For your term paper, you will research an issue about computing and society that you are initially undecided about.
          In your paper, you will take a position on that issue and support that position. Your paper should be approximately
          ten pages long. Don't worry if it's a bit longer or shorter--just make sure to cover your issue well. (Just please
          don't go over twice the suggested length.)
        </p>
        <p>
          Try to be balanced and fair in your presentation of evidence. You don' t necessarily need to take a strong stance
          on the issue. If as you research you find you are really undecided, you may instead write about why there is currently
          not enough evidence available on your issue. You can review all the existing evidence, and in your conclusion outline
          what sort of empirical research would be desirable to fully understand the issue.
        </p>
        <p>
          Quality of writing counts. Please try to make your prose clear and readable. Do not use overly formal language, but also
          do not use colloquialisms. Your textbooks are reasonable models for the desired writing style.
        </p>
        <p>
          To the greatest extent possible, all statements in your paper should be supported by appropriate references.
          If you include personal opinion or other sources of data, mark those clearly. Your bibliography should be in
          APA style. (See appendix of the Writing Arguments book.)
        </p>
        <p>
          Please avoid citing the same reference over and over. Sometimes we get term papers that are essentially a summary
          of one source. This does not make a good paper.
        </p>
        <p>
          Please do NOT write about sharing music and other files online, without special permission of the instructor. You may not
          write about privacy implications of RFID tags, because so many students have written about this in the past and there are
          old term papers circulating on campus. Your submitted term paper will be compared to an archive of past term papers.
        </p>

        <p>
          <b>Reference format:</b> Please use APA format for all references. APA formatis described in Appendix 2 of the Writing
          Arguments textbook, and also <a href="http://www.apastyle.org/" target="_blank">here</a>.
        </p>
      </div>
    )
  }
}