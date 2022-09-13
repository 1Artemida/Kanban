import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { getLists, removeList, setListToUpdate } from "../store/actions";
import { List } from "../store/types";
import './Lists.css';

const Lists: FC = () => {
  const dispatch = useDispatch();
  const lists = useSelector((state: RootState) => state.list.lists);

  useEffect(() => {
    dispatch(getLists());
  }, [dispatch]);

  const removeListItem = (id: string) => {
    dispatch(removeList(id))
  }

  const updateListItem = (id: string) => {
    dispatch(setListToUpdate(id));
  }

  return (
    <div className="panel">
      <p className="panel-head">List</p>
      <div className="panel-list">
        {Object.keys(lists).length === 0 ? (
          <p className="py-4 has-text-centered">fffffff</p>
        ) : (
          <div className="panel-list-blocks">
            {Object.values(lists).map((list: List) => {
                return <div className="panel-block" onClick={() => updateListItem(list.id)} key={list.id}>
                    <p>{list.name}</p>
                    <img className="panel-icon" onClick={() => removeListItem(list.id) }>
                    </img>
                </div>
            })} 
          </div>
        )}
      </div>
    </div>
  );
};

export default Lists;
