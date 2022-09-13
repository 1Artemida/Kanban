import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./App.css";

import Header from "./componets/Header";
import Sidebar from "./componets/Sidebar";
import UpdateListModal from "./componets/UpdateListModal";
import { RootState } from "./store/store";

const App: FC = () => {
  const listToUpdate = useSelector((state: RootState)=> state.list.listToUpdate);

  return (
    <div className="App">
      <Header
        title="Kanban ToDo Board List"
        description="Create tasks and monitoring them in lists"
     />
     <div className="container">
      <div className="elements">
        <Sidebar/>
      </div>
     </div>
     {listToUpdate && <UpdateListModal list={listToUpdate}/>}
    </div>
  );
};

export default App;
