import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Button, Image, List, Container } from "semantic-ui-react";

const UserHome = () => {
  return (
    <div className="container">
      <h1>welcome back</h1>
      <Container>
      <h4>last payments you made</h4>
        <List divided verticalAlign="middle">
          <List.Item>
            <List.Content floated="right">
              <Button>Add</Button>
            </List.Content>
            
            <List.Content>Lena</List.Content>
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
      </Container>
        
      
    </div>
  );
};

export default UserHome;
