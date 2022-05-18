import React from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.carmine.css';
import './App.css';
import Button from 'devextreme-react/button';
import Chart, {
  ArgumentAxis,
  Series,
  Legend
} from 'devextreme-react/chart';
import {Scheduler, View} from 'devextreme-react/scheduler';
import {appointments} from './data.js';

function App()  {
  return (
    <Scheduler id="scheduler"
    defaultCurrentView="timelineMonth"
    dataSource={appointments}
    textExpr="title"
    allDayExpr='dayLong'
    recurrenceRuleExpr='recurrence'>
      <View type="day"
      startDayHour={10}
      endDayHour={22}
      />
    </Scheduler>
  )
}

export default App;
