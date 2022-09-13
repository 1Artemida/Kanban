import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../store/actions";
import './NewList.css';

import { List } from "../store/types";

const NewList: FC = () => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState("");
  const [descriptionList, setDescriptionList] = useState("");

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  };

  const inputChangeHandlerDescription = (e: FormEvent<HTMLInputElement>) => {
    setDescriptionList(e.currentTarget.value);
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (listName.trim() === "") {
      return alert("List name is required!");
    }

    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: listName,
      descriptionList: descriptionList,
      tasks: [],
    };

    dispatch(addList(newList));
    setListName("");
    setDescriptionList("");
  };

  return (
    <div className="new-list-card">
      <div className="new-list-header">
        <p className="new-list-title">Create New List</p>
      </div>
      <div className="new-list-content">
        <form onSubmit={submitHandler}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="new-list-input"
                placeholder="List Name"
                name="listName"
                value={listName}
                onChange={inputChangeHandler}
              />{" "}
              <input
                type="text"
                className="new-list-input"
                placeholder="Description"
                name="listName"
                value={descriptionList}
                onChange={inputChangeHandlerDescription}
              />
            </div>
          </div>
          <div className="new-list-control">
            <button type="submit" className="button-create">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewList;
