import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Menu className="navbar" pointing secondary>
      <Menu.Item name="home" as={Link} to="/home">
        Home
      </Menu.Item>
      <Menu.Item name="About" as={Link} to="/about">
        About
      </Menu.Item>
      <Menu.Item name="contact" as={Link} to="/contact">
        Contact
      </Menu.Item>
      <Menu.Item name="users" as={Link} to="/users">
        Users
      </Menu.Item>
      <Menu.Item name="photos" as={Link} to="/photos">
        Photos
      </Menu.Item>
    </Menu>
  );
}
