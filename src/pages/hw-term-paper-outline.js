import React, { Component } from 'react';
import { Header, Table, List, Segment } from 'semantic-ui-react';

export default class HWTermPaperOutlinePage extends Component {
  render() {
    return (
      <div>
        <Header as='h1' content='HW5: Term Paper Outline'/>

        <Table definition>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Due</Table.Cell>
              <Table.Cell>March 8th, 2018</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Format</Table.Cell>
              <Table.Cell>12 pt font, double spaced</Table.Cell>
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
                  <List.Item>Quality of research</List.Item>
                  <List.Item>Insight into the issues</List.Item>
                </List>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>

        <p>
          Write an outline for your term paper. The outline will be structured as a series of major and minor section headings.
          Use as many levels of sub-headings as you need. In each section, you will include a list of points to make.
          The points should have citations to the bibliography. Your outline might look something like this (with more detail):
        </p>

        <Segment raised>
          <Header as='h4' content='1. Should cell phone use be banned in cars?'/>
          <List bulleted>
            <List.Item>Why the issue is important (Waits 2006)</List.Item>
            <List.Item>The controversy: is it really dangerous to use a cell phone while driving? (Bell 2004, Hancock 1999)</List.Item>
          </List>


          <Header as='h4' content='2. Background: the history of cell phone use'/>
          <List bulleted>
            <List.Item>First mobile phones invented in the 70s (Dylan 1995, Springsteen 2002)</List.Item>
            <List.Item>Increasing ubiquity of cell phones (Bowie 2005)</List.Item>
          </List>

          <Header as='h4' content='3. Technological underpinnings and how they affect the controversy'/>
          <List bulleted>
            <List.Item>
              Talking on a cell phone is different than talking to a person in the car, because the person
              pauses when the driver needs to pay full attention. (Costello 2000)
            </List.Item>
            <List.Item>
              Dialing a number is the most dangerous part of use in cars (Twain 1998)
                <List.List ordered>
                  <List.Item>Voice dialing is safer (Ibid.)</List.Item>
                </List.List>
            </List.Item>
          </List>

          <Header as='h4' content='4. The history of legislation regulating cell phone use in cars'/>
          <List bulleted>
            <List.Item>
              In the United states:
              <List.List ordered>
                <List.Item>First legislation in the US in place xxx said xxx (Macintyre 2004)</List.Item>
                <List.Item>Second legislation in the US in place xxx said xxx (Amos 2002)</List.Item>
                <List.Item>etc.</List.Item>
              </List.List>
            </List.Item>
            <List.Item>Legislation in Europe is quite different (Summers 2006)</List.Item>
          </List>

          <Header as='h4' content='5. etc.'/>
        </Segment>

        <p>
          Include a complete bibliography in your outline. Your bibliography should be formatted in correct APA style.
          See the appendix of the Writing Arguments book for a guide to APA citation format. If your references are
          not in correct APA format, you may be penalized up to 10 points.
        </p>

        <p>
          After your bibliography, include a section QUALITY OF REFERENCES. In this section, discuss the quality of
          sources you have found so far. How many of your sources are peer reviewed? How many by reputable experts
          in the field? What parts of your topic do you still need to find more references on, if any? This section
          should be approximately half a page to one page long.
        </p>

        <p>By the time you hand in your outline, most of your research should be done.</p>
      </div>
    )
  }
}