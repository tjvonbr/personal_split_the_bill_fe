import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "./UserHome.css";

import "semantic-ui-css/semantic.min.css";
import { Button, Icon, List, Container } from "semantic-ui-react";
import TableNav from "./TableNav";

const IconContacts = styled(Icon)`
  cursor: pointer;
`;
const IconTable = styled(Icon)`
  cursor: pointer;
  color= teal;
  &:hover {
    color: #057974;
  }
`;

const UserHome = () => {
  return (
    <>
      <TableNav />

      <div className="container">
        <h1>welcome back</h1>
      </div>
      <div className="icons-container">
        <div className="icons">
          <Link to="/contacts">
            <IconContacts color="violet" name="users" size="massive" />
            <h4>Friends</h4>
          </Link>
        </div>
        <div className="icons">
          <Link to="/table">
            <IconTable  name="table" size="massive" />
            <h4>Add new table</h4>
          </Link>
        </div>
        <div className="icons">
          <Link to="/previous">
            <IconTable color="pink" name="sync" size="massive" />
            <h4>Previous Meals</h4>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserHome;
