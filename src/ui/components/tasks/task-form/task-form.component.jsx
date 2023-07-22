import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { TaskContext } from '../../../context/task.context';
import {
  createTaskUseCase,
  updateTaskUseCase,
  findTaskByIdUseCase
} from '../../../../infrastructure/di';

const initialTaskState = {
  id: null,
  name: '',
  description: ''
};

function TaskForm() {
  const ReactSwal = withReactContent(Swal);

  const { state: { selectedTaskId }, dispatch, refreshList } = useContext(TaskContext);

  const [isSubmitting, setSubmittingStatus] = useState(false);
  const [task, setTask] = useState(initialTaskState);

  useEffect(() => {
    const getSelectedTask = async () => {
      try {
        const task = await findTaskByIdUseCase.execute(selectedTaskId);

        setTask({
          id: task.id,
          name: task.name,
          description: task.description
        });
      } catch (error) {
        setTask(initialTaskState);
        console.log(error);
      }
    };

    if (selectedTaskId) {
      getSelectedTask();
    }
  }, [selectedTaskId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask((task) => ({
      ...task,
      [name]: value
    }));
  };

  const handleClickCancel = () => {
    setTask(initialTaskState);
    dispatch({ type: 'SELECTED_TASK', selectedTaskId: null });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmittingStatus(true);

    try {
      if (selectedTaskId) {
        await updateTaskUseCase.execute(selectedTaskId, task);

        ReactSwal.fire({
          title: 'Tarea actualizada',
          text: 'La tarea se actualizó con éxito.',
          icon: 'success'
        });
      } else {
        await createTaskUseCase.execute(task);

        ReactSwal.fire({
          title: 'Tarea creada',
          text: 'La tarea se creó con éxito.',
          icon: 'success'
        });
      }

      setTask(initialTaskState);
      dispatch({ type: 'SELECTED_TASK', selectedTaskId: null });
      refreshList();
    } catch (error) {
      console.log(error);

      ReactSwal.fire({
        text: 'Ha ocurrido un error al crear la tarea.',
        title: 'Tarea no creada',
        icon: 'error'
      });
    } finally {
      setSubmittingStatus(false);
    }
  };

  return (
    <div className="border rounded-3 p-3">
      <h3>
        {(task.id) ? (
          <span>Actualizar una tarea</span>
        ) : (
          <span>Crear una tarea</span>
        )}
      </h3>

      <form method={(task.id) ? 'PUT' : 'POST'} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
            <span className="text-danger">*</span>
          </label>

          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Ingrese el nombre de la tarea"
            onChange={handleInputChange}
            value={task.name}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descripción
          </label>

          <textarea
            name="description"
            id="description"
            className="form-control"
            cols="50"
            placeholder="Ingrese la descripción de la tarea"
            onChange={handleInputChange}
            value={task.description}
          />
        </div>

        <div className="d-flex justify-content-end gap-2">
          {(task.id) ? (
            <button type="button" className="btn btn-secondary" onClick={handleClickCancel}>
              Cancelar
            </button>
          ) : (null)}
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {(isSubmitting) ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status"></span>
                <span className="ms-1">
                  {(task.id) ? (
                    'Actualizando'
                  ) : (
                    'Creando'
                  )}
                </span>
              </>
            ) : (
              (task.id) ? (
                <span>Actualizar tarea</span>
              ) : (
                <span>Crear tarea</span>
              )
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
