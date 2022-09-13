import React, { FC } from "react";
import Lists from "./Lists";
import './Sidebar.css';

import NewList from "./NewList";

const Sidebar: FC = () => {
  return (
    <div className="container-elements">
      <NewList />
      <Lists/>
    </div>
  );
};

export default Sidebar;
