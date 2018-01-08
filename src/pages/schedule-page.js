import React, { Component } from 'react';

import Schedule from '../components/schedule';
import scheduleData from '../data/schedule';

export default class SchedulePage extends Component {
  render() {
    return (
      <div>
        <p><b>
          Note: The class schedule is subject to change. Please check the online schedule frequently.
        </b></p>
        <Schedule data={scheduleData} />
      </div>
    );
  }
}