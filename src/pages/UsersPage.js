import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchApi = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <div>
      <List divided relaxed>
        {users.map((user) => (
          <List.Item>
            {}
            <List.Icon name="user" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{user.name}</List.Header>
              <List.Description as="a">{user.email}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default UsersPage;
