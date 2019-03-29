import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { LanguageSwitcher } from './language_switcher.js';

export class HeadNavBar extends React.Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="res/title.png" width="112" height="28" />
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="headNavbarExpandArea">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          
          <div id="headNavbarExpandArea" class="navbar-menu">
            <div class="navbar-start">
              <NavItem to="/" name="Home" />
              <NavDropDown key="research" name="Research">
                <NavItem to="/research" name="About" />
                <NavItem to="/publication" name="Publications" />
                <NavItem to="/activity" name="Activities" />
              </NavDropDown>
              <NavItem to="/member" name="Members" />
              <NavItem to="/links" name="Links" />
            </div>

            <div class="navbar-end">
              <div class="navbar-item">
                <LanguageSwitcher changeLang={this.props.changeLang.bind(this)} langText={this.props.langText} />
                <div class="buttons">
                  <NavItemButton to="/b3" name="For B3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

class NavItem extends React.Component {
  render() {
    return (
      <RouteLink to={this.props.to} key={this.props.to} class="navbar-item">
        {this.props.name}
      </RouteLink>
    )
  }
}

class NavItemButton extends React.Component {
  render() {
    return (
      <RouteLink to={this.props.to} key={this.props.to} class="button is-primary">
        <strong>{this.props.name}</strong>
      </RouteLink>
    )
  }
}

class NavDropDown extends React.Component {
  render() {
    return (
      <div class="navbar-item has-dropdown is-hoverable" key={this.key + '_parent'}>
        <a key={this.key} class="navbar-link">
          {this.props.name}
        </a>

        <div class="navbar-dropdown" key={this.key + '_child'}>
          {this.props.children}
        </div>
      </div>
    )
  }
}