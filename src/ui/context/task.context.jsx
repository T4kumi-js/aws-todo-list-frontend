import React, { createContext, useReducer } from 'react';
import { findAllTasksUseCase } from '../../infrastructure/di';

const initialTaskContextState = {
  list: [],
  selectedTaskId: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'TASK_LIST':
      return {
        ...state,
        list: action.list
      };
    case 'SELECTED_TASK':
      return {
        ...state,
        selectedTaskId: action.selectedTaskId
      };
    default:
      return state;
  }
}

export const TaskContext = createContext({});

export function TaskContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialTaskContextState);

  const refreshList = async () => {
    try {
      const tasks = await findAllTasksUseCase.execute();
      dispatch({ type: 'TASK_LIST', list: tasks });
    } catch (error) {
      dispatch({ type: 'TASK_LIST', list: [] });
      console.log(error);
    }
  };

  const context = {
    state,
    dispatch,
    refreshList
  };

  return (
    <TaskContext.Provider value={context}>
      {props.children}
    </TaskContext.Provider>
  );
};
