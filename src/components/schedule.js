import React, { Component } from 'react';
import { Header, List, Table } from 'semantic-ui-react';

export default class Schedule extends Component {
  render() {
    const scheduleRows = this.props.data.map((row) => {
      const readings = row["readings"].map((reading) => {
        return reading["href"] ?
          (
            <List.Item as="a" href={ reading["href"] } target="_blank">{ reading["text"] }</List.Item>
          ) :
          (
            <List.Item as="span">{ reading["text"] }</List.Item>
          )
      })

      const assignment = row["assignment"].map((asg) => {
        return (
          <List.Item as="a" href={ asg["href"] || "#" } target="_blank">{ asg["text"] }</List.Item>
        );
      })

      const notes = row["notes"].map((note) => {
        return (
          <List.Item as="p">{ note }</List.Item>
        );
      })

      return (
        <Table.Row>
          <Table.Cell>{ row['date'] }</Table.Cell>
          <Table.Cell>{ row['title'] }</Table.Cell>
          <Table.Cell>
            <List bulleted>{ readings }</List>
          </Table.Cell>
          <Table.Cell>
            <List>{ assignment }</List>
          </Table.Cell>
          <Table.Cell>
            <List>{ notes }</List>
          </Table.Cell>
        </Table.Row>
      );
    })

    return (
      <div>
        <Header as="h1" content="Schedule" />
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Readings</Table.HeaderCell>
              <Table.HeaderCell>Assignment due</Table.HeaderCell>
              <Table.HeaderCell>Notes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { scheduleRows }
          </Table.Body>
        </Table>
      </div>
    );
  }
}