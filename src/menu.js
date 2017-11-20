import React from 'react';
import { Toolbar, NavLink, Group } from 'rebass';

import styles from './menu.css';

export class MenuBar extends React.Component {
  render() {
    return (
      <Toolbar className={styles.menu_bar}>
        {this.props.children}
      </Toolbar>
    );
  }
}

export class MenuItem extends React.Component {
  render() {
    return (
      <NavLink className={styles.menu_item}>
        {this.props.children}
      </NavLink>
    );
  }
}

export class MenuParents extends React.Component {
  render() {
    return (
      <Group className={styles.menu_parent}>
        {this.props.children}
      </Group>
    );
  }
}

export class MenuChildren extends React.Component {
  render() {
    return (
      <Group className={styles.menu_child}>
        {this.props.children}
      </Group>
    );
  }
}
