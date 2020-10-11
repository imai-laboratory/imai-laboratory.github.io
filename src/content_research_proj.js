import React from 'react';

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentResearchProj extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
    };
  }
  render() {
    return (
      <div id='content_links'>
        <section className='hero is-small is-primary is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                {this.props.texts['menu_research_proj']}
              </h1>
            </div>
          </div>
        </section>
        <div className='container'>
          <ResearchProject
            title={this.props.texts['research_proj_crest']}
            desc={this.props.texts['research_proj_crest_desc']}
            url='http://crest.ailab.ics.keio.ac.jp/context/' />
          <ResearchProject
            title={this.props.texts['research_proj_sip']}
            desc={this.props.texts['research_proj_sip_desc']}
            url='https://www.nedo.go.jp/activities/ZZJP2_100126.html' />
          { this.props.lang === 'ja' &&
            <ResearchProject
              title={this.props.texts['research_proj_agv']}
              desc={this.state.lang}
              url='https://agventurelab.or.jp/' />
          }
        </div>
      </div>
    );
  }
}

class ResearchProject extends React.Component {
  render() {
    return (
      <div className='card link-card'>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>{this.props.title}</p>
              { this.props.desc &&
                <p className='subtitle'>{this.props.desc}</p>
              }
            </div>
          </div>

          <div className='content'>
            <p>{this.props.text}</p>
            <a href={this.props.url} className='button is-primary'>
              here
            </a>
          </div>
        </div>
      </div>
    );
  }
}
