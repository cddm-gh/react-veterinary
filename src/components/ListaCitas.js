import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({ citas, deleteAppointment }) => {

  //Print msg based on whether we have appointments or no
  const msg = Object.keys(citas).length === 0 ? "We don't have any appointments" : "Manage the appointments";

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
        <h2 className="card-title text-center">
          {msg}
        </h2>
        <div className="lista-citas">
          {citas.map(cita => (
            <Cita
              key={cita.id}
              cita={cita}
              deleteAppointment={deleteAppointment}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

ListaCitas.propTypes = {
  citas: PropTypes.array.isRequired,
  deleteAppointment: PropTypes.func.isRequired
}

export default ListaCitas;