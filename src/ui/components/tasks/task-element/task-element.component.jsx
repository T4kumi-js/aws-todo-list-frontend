import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TaskContext } from '../../../context/task.context';
import {
  deleteTaskUseCase,
  markTaskAsCompletedUseCase
} from '../../../../infrastructure/di';

function TaskElement({ task }) {
  const ReactSwal = withReactContent(Swal);
  const { dispatch, refreshList } = useContext(TaskContext);
  const [isRequesting, setRequestStatus] = useState(false);

  const handleMarkCompleteTask = async (task) => {
    setRequestStatus(true);

    try {
      await markTaskAsCompletedUseCase.execute(task.id);

      ReactSwal.fire({
        text: 'La tarea se completó con éxito.',
        title: 'Tarea completada',
        icon: 'success'
      });

      refreshList();
    } catch (error) {
      console.log(error);

      ReactSwal.fire({
        text: 'Ha ocurrido un error al completar la tarea.',
        title: 'Tarea no completada',
        icon: 'error'
      });
    } finally {
      setRequestStatus(false);
    }
  };

  const handleUpdateTask = (task) => {
    dispatch({
      type: 'SELECTED_TASK',
      selectedTaskId: task.id
    });
  };

  const handleDeleteTask = async (task) => {
    setRequestStatus(true);

    try {
      await deleteTaskUseCase.execute(task.id);

      ReactSwal.fire({
        text: 'La tarea se eliminó con éxito.',
        title: 'Tarea eliminada',
        icon: 'success'
      });

      refreshList();
    } catch (error) {
      console.log(error);

      ReactSwal.fire({
        text: 'Ha ocurrido un error al eliminar la tarea.',
        title: 'Tarea no eliminada',
        icon: 'error'
      });
    } finally {
      setRequestStatus(false);
    }
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{(task.isCompleted) ? 'Sí' : 'No'}</td>
      <td className="d-flex gap-1">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => handleMarkCompleteTask(task)}
          disabled={task.isCompleted || isRequesting}
          title="Completar"
        >
          C
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={() => handleUpdateTask(task)}
          disabled={isRequesting}
          title="Editar"
        >
          E
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteTask(task)}
          disabled={isRequesting}
          title="Eliminar"
        >
          D
        </button>
      </td>
    </tr>
  );
}

export default TaskElement;
