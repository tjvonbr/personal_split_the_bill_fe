import React from "react";
import styled from "styled-components";

import "semantic-ui-css/semantic.min.css";
import { Button, Icon, List, Container } from "semantic-ui-react";
import Table from '../img/table_with_view.jpg';
import TableNav from "./TableNav";


const Test = styled.button`
  color: red;
`;

const UserHome = () => {
  return (
    <>
    <img className='table-img' src={Table} alt='table' />
    <TableNav />
    
      <div className="container">
        <h1>welcome back</h1>
        <Container>
          <h4>last payments you made</h4>

          <List divided verticalAlign="middle">
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>

              <List.Content>
                <Icon name="home" size="small" />
                Lena
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>Lindsay</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>Mark</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>Molly</List.Content>
            </List.Item>
          </List>
          <Test>I am a button</Test>
        </Container>
      </div>
    </>
  );
};

export default UserHome;
