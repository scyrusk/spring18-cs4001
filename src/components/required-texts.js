import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react';

export default class RequiredTexts extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as='h1' content="Required Texts" />
        <List bulleted>
          <List.Item>
            <a href="https://www.amazon.com/Ethics-Information-Age-Michael-Quinn/dp/0134296540/">Ethics for the Information Age, Seventh Edition</a>, by Michael Quinn
            <List.List>
              <List.Item>You may rent an electronic copy rather than buying it.</List.Item>
            </List.List>
          </List.Item>
          <List.Item>
            <a href="https://www.amazon.com/Writing-Arguments-Rhetoric-Readings-Concise/dp/0134586492/ref=sr_1_1?ie=UTF8&qid=1515307899&sr=8-1&keywords=writing+arguments+concise+7th+edition">Writing Arguments: A Rhetoric with Readings, Concise Seventh Edition (2016)</a> by John D. Ramage, John C. Bean, and June Johnson.
            <List.List>
              <List.Item>You may rent an electronic copy rather than buying it.</List.Item>
              <List.Item>Abbreviation in schedule: WA</List.Item>
            </List.List>
          </List.Item>
          <List.Item>
            <a href="https://www.amazon.com/Visual-Statistical-Thinking-Displays-Decisions/dp/0961392134/">Visual & Statistical Thinking: Displays of Evidence for Decision Making</a> by <a href="http://edwardtufte.com" target="_blank">Edward R. Tufte</a>.
            Graphics Press, 1997.
          </List.Item>
        </List>

        <p>
          Please make sure to get the correct edition of the Quinn and Ramage et al books.
        </p>

        In addition, I will sometimes assign readings from other sources, including:
        <List bulleted>
          <List.Item>
            Articles on <a href="https://ereserves.library.gatech.edu/ares/">electronic reserve</a>.
          </List.Item>
          <List.Item>
            Articles available online
          </List.Item>
        </List>

        <p>
          The GT Library's <a href="http://library.gatech.edu/search/web_localizer.php">Web Localizer</a> is
          useful for research you need to do for this class. You may also need it to access some assigned readings.
        </p>
      </Segment>
    );
  }
}