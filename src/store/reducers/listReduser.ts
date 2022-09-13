import {
  GET_LISTS,
  GET_LIST_BY_ID,
  REMOVE_LIST,
  UPDATE_LIST,
  SET_LIST_ID_TO_REMOVE,
  SET_LIST_TO_UPDATE,
} from "./../types";
/* eslint-disable import/no-anonymous-default-export */
import { ADD_LIST, ListAction, Lists, ListState } from "./../types";

const initialState: ListState = {
  lists: {},
  listIdToRemove: "",
  listToUpdate: null,
  listById: null,
  taskToRemove: null,
  taskToEdit: null,
};

const getListsFromLS = (): Lists => {
  if (localStorage.getItem("task_list")) {
    return JSON.parse(localStorage.getItem("task_list") || "{}");
  }
  return {};
};

const saveListsToLS = (lists: Lists) => {
  localStorage.setItem("task_list", JSON.stringify(lists));
};

export default (state = initialState, action: ListAction): ListState => {
  const listsFromLS = getListsFromLS();

  switch (action.type) {
    case ADD_LIST:
      const clonedListsFromLS = { ...listsFromLS };
      clonedListsFromLS[action.payload.id] = action.payload;
      saveListsToLS(clonedListsFromLS);
      return {
        ...state,
        lists: clonedListsFromLS,
      };

    case GET_LISTS:
      return {
        ...state,
        lists: listsFromLS,
      };

    case GET_LIST_BY_ID:
      const list = listsFromLS[action.payload];
      return {
        ...state,
        listById: list,
      };

    case SET_LIST_ID_TO_REMOVE:
      return {
        ...state,
        listIdToRemove: action.payload,
      };

    case SET_LIST_TO_UPDATE:
      const listToUpdate = listsFromLS[action.payload];
      return {
        ...state,
        listToUpdate
      };

    case REMOVE_LIST:
      const clonedListsFromLS2 = { ...listsFromLS };
      delete clonedListsFromLS2[action.payload];
      saveListsToLS(clonedListsFromLS2);
      return {
        ...state,
        lists: clonedListsFromLS2,
        listIdToRemove: "",
        listById: null,
      };

    case UPDATE_LIST:
      const clonedListsFromLS3 = { ...listsFromLS };
      clonedListsFromLS3[action.payload.id].name = action.payload.name;
      clonedListsFromLS3[action.payload.id].descriptionList = action.payload.description;
      saveListsToLS(clonedListsFromLS3);
      return {
        ...state,
        lists: clonedListsFromLS3,
        listToUpdate: null,
      };

    default:
      return state;
  }
};
