import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({ cita, deleteAppointment }) => {
  return (
    <div className="media mt-3">
      <div className="media-body">
        <h3 className="mt-0">
          {cita.mascota}
        </h3>
        <p className="card-text"><span>Owner's name: </span> {cita.petowner}</p>
        <p className="card-text"><span>Date: </span> {cita.date}</p>
        <p className="card-text"><span>Hour: </span> {cita.hour}</p>
        <p className="card-text"><span>Symptons: </span> {cita.symptons}</p>

        <button
          className="btn btn-danger"
          onClick={() => deleteAppointment(cita.id)}
        >Delete &times;</button>
      </div>
    </div>
  );
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default Cita;