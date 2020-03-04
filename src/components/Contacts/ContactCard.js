import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

const ContactCard = ({ user }) => {
  console.log(user)

  return (
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{ user.firstName } { user.lastName }</Card.Header>
        <Card.Meta>{ user.email }</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Add to Bill
          </Button>
          <Button basic color='red'>
            View Profile
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
};

export default ContactCard;