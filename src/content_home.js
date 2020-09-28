import React from 'react';
import { HashLink } from 'react-router-hash-link';

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentHome extends React.Component {
  render() {
    return (
      <div id='content_home'>
        <section id='hero-welcome' className='hero-img hero is-large is-link is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title mb-4'>
                {this.props.texts['home_imailab']}
              </h1>
              <h2 className='is-size-4'>
                {this.props.texts['home_message']}
              </h2>
            </div>
          </div>
        </section>

        <section className='hero is-medium is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <h2 className='chap-title has-text-left has-text-white'>
                {this.props.texts['menu_research']} {this.props.texts['home_keywords']}:
              </h2>
              <HashLink to='/research#research_section_ai' key='/research_ai' className='button is-primary is-light mr-2 mb-2'>
                <strong>{this.props.texts['research_ai_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_si' key='/research_si' className='button is-primary is-light mr-2 mb-2'>
                <strong>{this.props.texts['research_si_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_ad' key='/research_ad' className='button is-primary is-light mr-2 mb-2'>
                <strong>{this.props.texts['research_ad_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_iu' key='/research_iu' className='button is-primary is-light mr-2 mb-2'>
                <strong>{this.props.texts['research_iu_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_ui' key='/research_ui' className='button is-primary is-light mr-2 mb-2'>
                <strong>{this.props.texts['research_ui_head']}</strong>
              </HashLink>
              <HashLink to='/research#research_section_ag' key='/research_ag' className='button is-primary is-light mr-2 mb-2'>
                <strong>{this.props.texts['research_ag_head']}</strong>
              </HashLink>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
