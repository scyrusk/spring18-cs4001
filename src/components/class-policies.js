import React, { Component } from 'react';
import { Segment, Header } from 'semantic-ui-react';

export default class ClassPolicies extends Component {
  render() {
    return (
      <Segment vertical>
        <Header as='h1' content="Class Policies" />
        <Header as="h3" content="Devices in Class" />
        <p>
          Educational research and student feedback suggest that using devices on non-class related
          activities not only harms your own learning, but other students' learning as well. Accordingly,
          I do not allow the use of laptops or cellphones in class unless it is for specific in-class
          activities.

          That said, if you believe it would truly help your learning, I may consider allowing your use of
          a laptop on a case-by-case basis. If you would like to use a laptop during class, please set up a
          time to meet with me.
        </p>
        <Header as="h3" content="Late Submissions" />
        <p>
          Assignments are due at the start of class on the day they are due. Late assignments
          will be penalized at a rate of 3 pts (one grade step: A becomes A-) per day. Assignments
          more than one week late will not be accepted.

          Over the course of the term, you have three "late days" where work may be late with no
          explanation needed. Please mark “Use my late days” on the first page of your assignment/paper
          if want to use your late days when you make late submissions. Use your late days wisely as
          different submissions have different weights.
        </p>
        <Header as="h3" content="Absence" />
        <p>
          You may miss up to two classes without it affecting your grade. However, please note that
          exams are strongly based on material that is covered in class, and being there is the best
          way to know what you need to know. If you do miss a class, please do get notes from a classmate.
        </p>
        <Header as="h3" content="Honor Code" />
        <p>
          This class abides by the <a href="http://www.policylibrary.gatech.edu/student-affairs/academic-honor-code">Georgia Tech Honor Code</a>.
          All assigned work is expected to be individual, except where explicitly written otherwise. You are encouraged to discuss
          the assignments with your classmates; however, what you hand in should be your own work.
        </p>
      </Segment>
    );
  }
}