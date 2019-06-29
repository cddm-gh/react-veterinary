import React, { Component } from 'react';
import uuid from 'uuid';

const stateInicial = {
  cita: {
    mascota: '',
    petowner: '',
    date: '',
    time: '',
    symptons: ''
  },
  error: false
}

class NuevaCita extends Component {
  state = { ...stateInicial }

  //Event when user is typing
  handleChange = (e) => {
    // console.log(e.target.name + ': ' + e.target.value);
    //set the state to what the user is typing
    this.setState({
      cita: {
        ...this.state.cita, //make a copy of the state
        [e.target.name]: e.target.value
      }
    })
  }

  //Event when form is submited
  handleSubmit = e => {
    e.preventDefault();

    //get values from state
    const { mascota, petowner, date, hour, symptons } = this.state.cita;
    //validate values
    if (mascota === '' || petowner === '' || date === '' || hour === '' || symptons === '') {
      this.setState({
        error: true
      });
      return;
    }
    //Generate a Object with the appointment data
    const newAppointment = { ...this.state.cita };
    newAppointment.id = uuid();
    //Add appointment to the App's state
    this.props.createAppointment(newAppointment);
    //Set stateInicial as state
    this.setState({
      ...stateInicial
    })
  }

  render() {

    const { error } = this.state;

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">
            Complete the form to create a new appointment.
          </h2>
          {/* Show the error if exists */}
          {error ? <div className="alert alert-danger mt-2 mb-5 text-center alert-dismissible fade show" role="alert">
            <strong>All fields are required.</strong>
            {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div> : null}

          <form
            onSubmit={this.handleSubmit}
          >
            <div className="form-group row">
              <label htmlFor="mascota" className="col-sm-4 col-lg-2 col-form-label">Pet's Name</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  id="mascota"
                  type="text"
                  name="mascota"
                  className="form-control"
                  placeholder="Pet's Name"
                  onChange={this.handleChange}
                  value={this.state.cita.mascota}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="petowner" className="col-sm-4 col-lg-2 col-form-label">Owner's Name</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  name="petowner"
                  className="form-control"
                  placeholder="Pet's Owner Name"
                  onChange={this.handleChange}
                  value={this.state.cita.petowner}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="date" className="col-sm-4 col-lg-2 col-form-label">Date</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.cita.date}
                />
              </div>

              <label htmlFor="time" className="col-sm-4 col-lg-2 col-form-label">Hour</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  name="time"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.cita.time}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="symptons" className="col-sm-4 col-lg-2 col-form-label">Symptons</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  type="text"
                  name="symptons"
                  className="form-control"
                  placeholder="Symptons of the pet"
                  maxLength="350"
                  onChange={this.handleChange}
                  value={this.state.cita.symptons}
                ></textarea>
              </div>
            </div>

            <input
              type="submit"
              className="py-3 mt-2 btn btn-success btn-block"
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default NuevaCita;