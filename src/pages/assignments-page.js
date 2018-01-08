import React, { Component } from 'react';
import { Header, Table } from 'semantic-ui-react';

import scheduleData from '../data/schedule';

export default class AssignmentsPage extends Component {
  render() {
    const rows = scheduleData.map((row) => {
      if (row["assignment"].length === 1) {
        const asg = row["assignment"][0]
        return (
          <Table.Row>
            <Table.Cell><a href={asg["href"] || "#"} target="_blank">{ asg["text"] }</a></Table.Cell>
            <Table.Cell>{ row["date"] }</Table.Cell>
          </Table.Row>
        )
        return null;
      }
    });

    return (
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Assignment</Table.HeaderCell>
            <Table.HeaderCell>Due Date</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          { rows }
        </Table.Body>
      </Table>
    );
  }
}