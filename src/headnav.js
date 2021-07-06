import React from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { LanguageSwitcher } from './language_switcher.js';

export class HeadNavBar extends React.Component {
  render() {
    return (
      <nav id='headnav' className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img src='res/title.png' />
          </a>

          <a role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='headNavbarExpandArea'>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>

        <div id='headNavbarExpandArea' className='navbar-menu'>
          <div className='navbar-start'>
            <NavItem to='/' name={this.props.texts['menu_home']} />
            <NavDropDown key='research' name={this.props.texts['menu_research']}>
              <NavItem to='/research' name={this.props.texts['menu_research_theme']} />
              <NavItem to='/research_proj' name={this.props.texts['menu_research_proj']} />
            </NavDropDown>
            <NavDropDown key='publication' name={this.props.texts['menu_publication']}>
              <NavItem to='/publication_journal' name={this.props.texts['menu_publication_journal']} />
              <NavItem to='/publication_international' name={this.props.texts['menu_publication_international']} />
              <NavItem to='/publication_domestic' name={this.props.texts['menu_publication_domestic']} />
            </NavDropDown>
            <NavDropDown key='activity' name={this.props.texts['menu_activity']}>
              <NavItem to='/activity_award' name={this.props.texts['menu_activity_award']} />
              <NavItem to='/activity_media' name={this.props.texts['menu_activity_media']} />
              <NavItem to='/activity_talk' name={this.props.texts['menu_activity_talk']} />
            </NavDropDown>
            <NavItem to='/member' name={this.props.texts['menu_member']} />
            <NavItem to='/access' name={this.props.texts['menu_access']} />
            {/*<NavItem to='#' name={this.props.texts['menu_class']} />*/}
            <NavItem to='/links' name={this.props.texts['menu_links']} />
            
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <LanguageSwitcher changeLang={this.props.changeLang.bind(this)} langText={this.props.langText} />
              <div className='buttons'>
                <a href='http://www.ailab.ics.keio.ac.jp/welcome-junior/' className='button is-primary'>
                  <strong>{this.props.texts['menu_b3']}</strong>
                </a>
                <a href='https://twitter.com/imailab' className='button is-info'>
                  <span className='icon'>
                    <i className='fab fa-twitter' />
                  </span>
                </a>
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
      <RouteLink to={this.props.to} key={this.props.to} className='navbar-item'>
        {this.props.name}
      </RouteLink>
    );
  }
}

class NavDropDown extends React.Component {
  render() {
    return (
      <div className='navbar-item has-dropdown is-hoverable' key={this.key + '_parent'}>
        <a key={this.key} className='navbar-link'>
          {this.props.name}
        </a>

        <div className='navbar-dropdown' key={this.key + '_child'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
