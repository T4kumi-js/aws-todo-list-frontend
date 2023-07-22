import React, { useContext, useEffect } from 'react';
import { TaskContext } from '../../../context/task.context';
import { TaskElement } from '../task-element';

function TaskList() {
  const { state: { list }, refreshList } = useContext(TaskContext);

  useEffect(() => {
    refreshList();
  }, []); // eslint-disable-line

  return (
    <div className="my-3">
      <h3>Lista de tareas</h3>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">¿Completado?</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {list.map((task) => (
              <TaskElement key={task.id} task={task} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskList;
