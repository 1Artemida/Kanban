export const GET_LISTS = "GET_LISTS";
export const GET_LIST_BY_ID = "GET_LIST_BY_ID";
export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";
export const UPDATE_LIST = "UPDATE_LIST";
export const SET_LIST_ID_TO_REMOVE = 'SET_LIST_ID_TO_REMOVE';
export const SET_LIST_TO_UPDATE = 'SET_LIST_TO_UPDATE';

export const ADD_TASK = "ADD_TASK";
export const REMOVE_TASK = "REMOVE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
  storypPoint: number;
}

export interface List {
  id: string;
  name: string;
  descriptionList: string; 
  tasks: Task[];
}

export interface Lists {
  [id: string]: List;
}

//Actions
interface AddListAction {
  type: typeof ADD_LIST;
  payload: List;
}

interface GetListsAction {
  type: typeof GET_LISTS;
}

interface GetListByIdAction {
  type: typeof GET_LIST_BY_ID;
  payload: string;
}

interface RemoveListAction {
  type: typeof REMOVE_LIST;
  payload: string;
}

interface UpdateListAction {
  type: typeof UPDATE_LIST;
  payload: {
    id: string;
    name: string;
    description: string;
  };
}

interface SetListIdToRemoveAction {
    type: typeof SET_LIST_ID_TO_REMOVE;
    payload: string;
  }
  
  interface SetListToUpdateAction {
    type: typeof SET_LIST_TO_UPDATE;
    payload: string;
  }

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: {
    task: Task;
    list: List;
  };
}

interface RemoveTaskAction {
  type: typeof REMOVE_TASK;
  payload: {
    task: Task;
    list: List;
  };
}

interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: {
    taskId: string;
    taskName: string;
    taskDescription: string;
    taskStatus: string;
    taskStorypoint: number;
    taskList: List;
  };
}

export type ListAction =
  | AddListAction
  | GetListsAction
  | GetListByIdAction
  | RemoveListAction
  | UpdateListAction
  | SetListToUpdateAction
  | SetListIdToRemoveAction
  | AddTaskAction
  | RemoveTaskAction
  | UpdateTaskAction;

export interface ListState {
  lists: Lists;
  listIdToRemove: string;
  listToUpdate: List | null;
  listById: List | null;

  taskToRemove: {
    task: Task;
    list: List;
  } | null;
  taskToEdit: {
    task: Task;
    list: List;
  } | null;
}
