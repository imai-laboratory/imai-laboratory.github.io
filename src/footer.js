import React from 'react';

import MadeWithBulmaImg from '../res/made-with-bulma.png';
import KeirinBannerImg from '../res/keirin-banner.svg';
import JkaSocialActionBannerImg from '../res/jka-social-action-banner.svg';

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

            <div className='imai-footer-banners'>
              <div className='imai-footer-banner-block'>
                <a
                  href='https://keirin.jp/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='imai-footer-banner'
                >
                  <img src={KeirinBannerImg} alt='KEIRIN.JP Official Website' />
                </a>

                <a
                  href='https://keirin.jp/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='imai-footer-banner-link'
                >
                  https://keirin.jp
                </a>
              </div>

              <div className='imai-footer-banner-block'>
                <a
                  href='http://jka-cycle.jp'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='imai-footer-banner'
                >
                  <img src={JkaSocialActionBannerImg} alt='JKA Social Action' />
                </a>

                <a
                  href='http://jka-cycle.jp'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='imai-footer-banner-link'
                >
                  http://jka-cycle.jp
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
