import React from 'react';

import MadeWithBulmaImg from '../res/made-with-bulma.png';
import KeirinBannerImg from '../res/keirin-banner.svg';

export class Footer extends React.Component {
  render() {
    return (
      <footer className='footer imai-footer'>
        <div className='content'>
          <div className='imai-footer-layout'>
            <div className='imai-footer-copy has-text-centered'>
              <div>
                {this.props.children}
              </div>

              <a href='https://bulma.io' className='imai-footer-bulma'>
                <img src={MadeWithBulmaImg} alt='Made with Bulma' width='128' height='24' />
              </a>
            </div>

            <a
              href='https://keirin.jp/'
              target='_blank'
              rel='noopener noreferrer'
              className='imai-footer-banner'
            >
              <img src={KeirinBannerImg} alt='KEIRIN.JP Official Website' />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
