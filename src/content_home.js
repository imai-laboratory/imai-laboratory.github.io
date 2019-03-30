import React from 'react';
import { HashLink } from 'react-router-hash-link';

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentHome extends React.Component {
  render() {
    return (
      <div id='content_home'>
        <section id='hero-welcome' className='hero-img hero is-large is-dark is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                {this.props.texts['home_imailab']}
              </h1>
            </div>
          </div>
        </section>

        <section id='hero-research' className='hero-img hero is-medium is-dark is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                {this.props.texts['menu_research']}
              </h1>
              <h2 className='subtitle'>
                {this.props.texts['home_keywords']}:
              </h2>
              <HashLink to='/research#research_section_iai' key='/research_iai' className='button is-primary mr-2 mb-2'>
                <strong>{this.props.texts['research_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_hai' key='/research_hai' className='button is-primary mr-2 mb-2'>
                <strong>{this.props.texts['research_hai_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_hri' key='/research_hri' className='button is-primary mr-2 mb-2'>
                <strong>{this.props.texts['research_hri_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_ca' key='/research_ca' className='button is-primary mr-2 mb-2'>
                <strong>{this.props.texts['research_ca_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_as' key='/research_as' className='button is-primary mr-2 mb-2'>
                <strong>{this.props.texts['research_as_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_cn' key='/research_cn' className='button is-primary mr-2 mb-2'>
                <strong>{this.props.texts['research_cn_head']}</strong>
              </HashLink>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
