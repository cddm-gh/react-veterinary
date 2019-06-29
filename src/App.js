import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  };

  //When app is ready
  componentDidMount() {
    //Read data stored in local storage
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  //When a new appointment is maded or deleted
  componentDidUpdate() {
    //Saving citas to local storage
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crateAppointment = data => {
    //Copy current state
    const citas = [...this.state.citas, data];
    //Add the new state
    this.setState({ citas })
  }

  //Delete appointments from state
  deleteAppointment = id => {
    //Make copy of state
    const citasActuales = [...this.state.citas];
    //Remove element with id from array
    const citas = citasActuales.filter(cita => cita.id !== id);
    //Update state
    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header
          title="Veterinary Appointments" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NuevaCita
              createAppointment={this.crateAppointment}
            />
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListaCitas
              citas={this.state.citas}
              deleteAppointment={this.deleteAppointment}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
