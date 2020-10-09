import React from 'react';

// Images
import CnMouseImg from '../res/research/cn_mouse.jpg';
import AiImg from '../res/research/ai_ja.png';
import AgImg from '../res/research/ag.png';
import SigImg from '../res/research/signage_1.jpg';
import IuImg from '../res/research/iu.jpg';
import UiImg from '../res/research/ui.png';

// -----------------------------------------------------------------------------
// ------------------------------- Research pages ------------------------------
// -----------------------------------------------------------------------------

// ------------------------------------ Top ------------------------------------
export class ContentResearch extends React.Component {
  render() {
    return (
      <div id='content_research'>
        <section id='hero-research' className='hero-img hero is-medium is-dark is-bold'>
          <div className='hero-body'>
            <div className='container has-text-centered'>
              <h1 className='title'>
                {this.props.texts['menu_research_theme']}
              </h1>
            </div>
          </div>
        </section>

        <ResearchSection key='ai' id='ai' title={this.props.texts['research_ai_head']}>
          <ResearchSubSection text={this.props.texts['research_ai_exp']}>
            <div className='column has-text-centered'>
              <img src={AiImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='si' id='si' title={this.props.texts['research_si_head']}>
          <ResearchSubSection text={this.props.texts['research_si_exp']}>
            <div className='column has-text-centered'>
              <img src={CnMouseImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='ad' id='ad' title={this.props.texts['research_ad_head']}>
          <ResearchSubSection text={this.props.texts['research_ad_exp']}>
            <div className='column has-text-centered'>
              <img src={SigImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='iu' id='iu' title={this.props.texts['research_iu_head']}>
          <ResearchSubSection text={this.props.texts['research_iu_exp']}>
            <div className='column has-text-centered'>
              <img src={IuImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='ui' id='ui' title={this.props.texts['research_ui_head']}>
          <ResearchSubSection text={this.props.texts['research_ui_exp']}>
            <div className='column has-text-centered'>
              <img src={UiImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='ag' id='ag' title={this.props.texts['research_ag_head']}>
          <ResearchSubSection text={this.props.texts['research_ag_exp']}>
            <div className='column has-text-centered'>
              <img src={AgImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>
      </div>
    );
  }
}

class ResearchSection extends React.Component {
  render() {
    return (
      <div id={'research_section_' + this.props.id}>
        <section className='hero is-primary'>
          <div className='hero-body'>
            <div className='container'>
              <h1 className='title'>
                {this.props.title}
              </h1>
            </div>
          </div>
        </section>
        {this.props.children}
      </div>
    );
  }
}

class ResearchSubSection extends React.Component {
  render() {
    if (this.props.title) {
      var titlearea =
        <h2 className='research-theme-subtitle'>
          {this.props.title}
        </h2>;
    }
    return (
      <div className='container research-theme-content'>
        {titlearea}
        <div className='columns'>
          {this.props.children}
          <div className='column'>{this.props.text}</div>
        </div>
      </div>
    );
  }
}
