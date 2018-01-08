import React, { Component } from 'react';
import { Segment, Header, Table } from 'semantic-ui-react';

export default class Grading extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as='h1' content="Grading" />
        Your grade will be calcualted as follows:
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>% of final grade</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Class attendance</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Class participation</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Homeworks</Table.Cell>
              <Table.Cell>20</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Midterm</Table.Cell>
              <Table.Cell>15</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Term paper</Table.Cell>
              <Table.Cell>25</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Final exam</Table.Cell>
              <Table.Cell>20</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>


        <p>
          <b>Attendance: </b>
          Class attendance is required. Please remember to sign the attendance sheet each class.
          Please do not sign the attendance sheet if you are more than 15 minutes late to class.
          If you need to miss class for a legitimate reason, please send an email to the instructor
          and TA, preferably before class. Legitimate reasons for missing class include illness,
          a job interview, or attending a conference. Excuses that will not be accepted include,
          for example, picking someone up at the airport, having something due in another class,
          or having furniture delivered.
        </p>

        <p>
          Attending the career fair is not a legitimate reason, since it is open all day. However,
          you may choose to use one of your two allowed absences (see below) for the career fair,
          if your total class schedule makes it difficult to attend otherwise.
        </p>

        <p>
          <b>Homeworks:</b>
          Homeworks will be graded on a list of criteria (specified on the assignment) such as
          quality of writing, completeness, insight into technical issues, insight into social
          issues, etc. For most assignments, you start out half way between a B+ and A-. If you
          meet expectations on all of the criteria, your grade will remain that way. If you exceed
          expectations on any <i>one</i> of the criteria, your grade will go up a notch (e.g., to a definite A-).
          If you do worse than expected on any <i>one</i> criteria, your grade will go down a notch (e.g., to a
          definite B+). Your overall grade for the assignment will be calculated by summing your
          performance across all criteria. These are general guidelines to let you know what to expect.
          Grading on specific assignments may differ.
        </p>

        <p>
          Please submit all assignments on TSquare unless explicitly instructed otherwise.
        </p>

        <p>
          <b>Reference Format:</b>
          Please use APA format for all references. APA format is described in Appendix 2 of the Writing Arguments textbook,
          and also <a href="http://www.apastyle.org/">here</a>.
        </p>

        <p>
          <b>ESL:</b>
          If English is not your first language, you may request to not be graded on your writing for
          a particular individual assignment, including the term paper. This means you won't be penalized
          for bad writing, but you also won't get credit for good writing. To take advantage of this option,
          you must mark "ESL" (English as a Second Language) on the first page of your assignment/paper.
          This option is not available for group assignments. We still of course expect you to try to write
          in correct English, and will do our best to offer useful feedback on your writing.
        </p>
      </Segment>
    );
  }
}