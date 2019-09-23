import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  background: #56baed;
  height: 56px;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
  padding-bottom: 50px;
`

const TableNav = () => {
  return (
    <Header>
      <nav className="toolbar_navigation">
        <div className="toolbar-navigation-items">
          <Link to="/welcome">Person</Link>
          <Link to="/">Plate</Link>
          <Link to="/signup">$$$</Link>
          
        </div>
      </nav>
    </Header>
  );
};

export default TableNav;