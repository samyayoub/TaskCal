import React, { Component } from 'react';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.carmine.css';
import './App.css';
// import Button from 'devextreme-react/button';
// import Chart, {
//   ArgumentAxis,
//   Series,
//   Legend
// } from 'devextreme-react/chart';
import {Scheduler, View} from 'devextreme-react/scheduler';
import {appointments} from './data.js';
import notify from 'devextreme/ui/notify';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allowAdding: true,
      allowDeleting: true,
      allowResizing: true,
      allowDragging: true,
      allowUpdating: true,
    };
    this.onAllowAddingChanged = this.onAllowAddingChanged.bind(this);
    this.onAllowDeletingChanged = this.onAllowDeletingChanged.bind(this);
    this.onAllowResizingChanged = this.onAllowResizingChanged.bind(this);
    this.onAllowDraggingChanged = this.onAllowDraggingChanged.bind(this);
    this.onAllowUpdatingChanged = this.onAllowUpdatingChanged.bind(this);
    this.showAddedToast = this.showAddedToast.bind(this);
    this.showUpdatedToast = this.showUpdatedToast.bind(this);
    this.showDeletedToast = this.showDeletedToast.bind(this);
  }

  render() {
    return (
      <Scheduler id="scheduler"
      defaultCurrentView="agenda"
      dataSource={appointments}
      textExpr="title"
      allDayExpr='dayLong'
      recurrenceRuleExpr='recurrence'
      editing={this.state}
      onAppointmentAdded={this.showAddedToast}
      onAppointmentUpdated={this.showUpdatedToast}
      onAppointmentDeleted={this.showDeletedToast}>
        <View
          type="day"
          startDayHour={10}
          endDayHour={22}
        />
        <View
            type="week"
            startDayHour={10}
            endDayHour={22}
        />
        <View type="month" />
      </Scheduler>
    )
  }

  onAllowAddingChanged(e)  {
    this.setState({allowAdding: e.value});
  }

  onAllowDeletingChanged(e) {
    this.setState({allowDeleting: e.value});
  }

  onAllowResizingChanged(e) {
    this.setState({allowResizing: e.value});
  }

  onAllowDraggingChanged(e) {
    this.setState({allowDragging: e.value});
  }

  onAllowUpdatingChanged(e)  {
    this.setState({allowUpdating: e.value});
  }

  showToast(event, value, type) {
    notify(`${event} "${value}" task`, type, 800);
  }

  showAddedToast(e)  {
    this.showToast('Added', e.appointmentData.title, 'sucess')
  }

  showUpdatedToast(e)  {
    this.showToast('Updated', e.appointmentData.title, 'info');
  }

  showDeletedToast(e)  {
    this.showToast('Deleted', e.appointmentData.title, 'warning');
  }

}


export default App;
