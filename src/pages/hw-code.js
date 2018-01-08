import React, { Component } from 'react';
import { Header, Table, List } from 'semantic-ui-react';

export default class HWCodePage extends Component {
  render() {
    return (
      <div>
        <Header as='h1' content='HW3: The New ACM Code'/>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Due</Table.Cell>
              <Table.Cell>February 8th, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Format</Table.Cell>
              <Table.Cell>Approximately 1.5 to 2 pages, double spaced, 12 pt font</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Logistics</Table.Cell>
              <Table.Cell>Paper copy handed in during class and submit as a PDF on TSquare</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Grading Criteria</Table.Cell>
              <Table.Cell>
                <List bulleted>
                  <List.Item>Completeness</List.Item>
                  <List.Item>Writing</List.Item>
                  <List.Item>Insight into ethical issues</List.Item>
                </List>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <p>
          Pick two changes in ACM code of conduct <a href="https://ethics.acm.org/2018-code-draft-3/" target="_blank">draft 3</a> that you think are
          significant (contrasting to the <a href="https://www.acm.org/about-acm/acm-code-of-ethics-and-professional-conduct" target="_blank">current
          code (1992)</a>). For each change, in about three-quarters of a page to a page, discuss why you feel this change is significant. If you
          prefer the previous version or would like to make further changes or additions to this version, explain in detail.
        </p>


        <p><b>Come to class prepared to discuss your opinions.</b></p>
      </div>
    )
  }
}