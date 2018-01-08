import React, { Component } from 'react';
import { Segment, Header, List } from 'semantic-ui-react';

export default class LearningObjectives extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as="h1" content="Learning Objectives" />
        <List>
          <List.Item as="div">
            <Header as="h3" content="Ethics" />
            <p>
              What do "right" and "wrong" mean anyway? How is "ethical" different from "legal"?
              We'll learn about several philosophical approaches to ethics including
              utilitiarianism, Kantianism, social contract theory, and virtue ethics. The goal is
              for students to be able to address ethical dilemmas with reasoned arguments,
              grounded in a combination of these ethical theories.
            </p>
          </List.Item>
          <List.Item as="div">
            <Header as="h3" content="Professional Ethics" />
            <p>
              What special responsibilities do we have as computing professionals? What do the Software
              Engineering Code of Ethics and ACM Code of Ethics say, and how can we use these in
              our daily practice?
            </p>
          </List.Item>
          <List.Item as="div">
            <Header as="h3" content="Computing and Society" />
            <p>
              In what ways does computer technology impact society? We'll talk about a host of issues
              including privacy, intellectual property, and freedom of speech.
            </p>
          </List.Item>
          <List.Item as="div">
            <Header as="h3" content="Argumentation" />
            <p>
              How do you construct a well-reasoned argument? Whatever you go on to do in your
              professional career, your success will arguably depend more on your oral and written
              communication skills than on your technical skills. This class is one of your few and
              precious opportunities to work to improve those skills.
            </p>
          </List.Item>
        </List>
      </Segment>
    );
  }
}