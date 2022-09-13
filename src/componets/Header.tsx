import React, { FC } from "react";
import './Header.css';

interface HeaderProps {
  title: string;
  description?: string;
}

const Header: FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="header">
      <div className="header-body">
        <div className="info">
          <h1 className="title">{title}</h1>
          <h2 className="description">{description}</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
