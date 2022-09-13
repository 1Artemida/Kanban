import {
  List,
  ListAction,
  ADD_LIST,
  GET_LISTS,
  GET_LIST_BY_ID,
  REMOVE_LIST,
  UPDATE_LIST,
  Task,
  ADD_TASK,
  REMOVE_TASK,
  UPDATE_TASK,
  SET_LIST_TO_UPDATE,
  SET_LIST_ID_TO_REMOVE,
} from "./../types";

export const addList = (list: List): ListAction => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};

export const getLists = (): ListAction => {
  return {
    type: GET_LISTS,
  };
};

export const getListById = (id: string): ListAction => {
  return {
    type: GET_LIST_BY_ID,
    payload: id,
  };
};

export const removeList = (id: string): ListAction => {
  return {
    type: REMOVE_LIST,
    payload: id,
  };
};

export const updateList = (id: string, name: string, description: string): ListAction => {
  return {
    type: UPDATE_LIST,
    payload: {
      id,
      name,
      description
    },
  };
};

export const setListToUpdate = (id: string): ListAction => {
    return {
      type: SET_LIST_TO_UPDATE,
      payload: id
    }
  }

  export const setListIdToRemove = (id: string): ListAction => {
    return {
      type: SET_LIST_ID_TO_REMOVE,
      payload: id
    }
  }

export const addTask = (task: Task, list: List): ListAction => {
  return {
    type: ADD_TASK,
    payload: {
      task,
      list,
    },
  };
};

export const RemoveTask = (task: Task, list: List): ListAction => {
  return {
    type: REMOVE_TASK,
    payload: {
      task,
      list,
    },
  };
};

export const updateTask = (
  taskId: string,
  taskName: string,
  taskDescription: string,
  taskStatus: string,
  taskStorypoint: number,
  taskList: List
): ListAction => {
  return {
    type: UPDATE_TASK,
    payload: {
      taskId,
      taskName,
      taskDescription,
      taskStatus,
      taskStorypoint,
      taskList,
    },
  };
};
