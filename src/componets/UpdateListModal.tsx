import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setListToUpdate, updateList } from "../store/actions";

import { List } from "../store/types";
import './UpdateListModal.css';

interface UpdateListModalProps {
  list: List;
}

const UpdateListModal: FC<UpdateListModalProps> = ({ list }) => {
  const dispatch = useDispatch();
  const [listName, setListName] = useState(list.name);
  const [listDescription, setlistDescription] = useState(list.descriptionList);

  const changeInput = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  };

  const changeDescription = (e: FormEvent<HTMLInputElement>) => {
    setlistDescription(e.currentTarget.value);
  };

  const hideModal = () => {
    dispatch(setListToUpdate(""));
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {

    dispatch(updateList(list.id, listName, listDescription));
  };

  return (
    <div className="modal-form">
      <div className="modal" onClick={hideModal}></div>
      <form className="card" onSubmit={submit}>
        <header className="card-header">
          <p className="card-title">Update List</p>
          <button type="button" className="delete" onClick={hideModal}>X</button>
        </header>
        <div className="card-body">
          <div className="field">
            <label className="label">List Name</label>
            <div className="control-info">
              <input
                type="text"
                className="input"
                name="listName"
                placeholder="List Name"
                value={listName}
                onChange={changeInput}
              />
              <label className="label">Description</label>
              <input
                type="text"
                className="input"
                name="descriptionName"
                placeholder="Description"
                value={listDescription}
                onChange={changeDescription}
              />
            </div>
          </div>
        </div>
        <footer className="card-foot">
          <button type="submit" className="button">
            Save
          </button>
          <button type="button" className="button" onClick={hideModal}>
            Cancel
          </button>
        </footer>
      </form>
    </div>
  );
};

export default UpdateListModal;
