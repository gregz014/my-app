import React, { useState, useEffect } from 'react';
import { List } from 'semantic-ui-react';
import { Image } from 'semantic-ui-react';

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  const fetchAPI = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => setPhotos(data));
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  return (
    <div>
      <List divided relaxed>
        {photos.map((photo) => (
          <List.Item>
            {}
            <List.Icon name="photos" size="large" verticalAlign="middle" />
            <List.Content>
              <List.Header as="a">{photo.id}</List.Header>
              <List.Description as="a">{photo.title}</List.Description>
              <List.Icon as="a">{photo.url}</List.Icon>
              <List.Image as="a">{photo.thumbnailUrl}</List.Image>
            </List.Content>
          </List.Item>
        ))}
      </List>
      )
    </div>
  );
};
export default Photos;
