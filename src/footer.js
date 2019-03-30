import React from 'react';

import MadeWithBulmaImg from '../res/made-with-bulma.png';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <div>
            {this.props.children}
          </div>
          
          <a href="https://bulma.io">
            <img src={MadeWithBulmaImg} alt="Made with Bulma" width="128" height="24" />
          </a>
        </div>
      </footer>
    )
  }
}