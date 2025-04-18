import React from 'react';

// Images
import AiImg from '../res/research/scain_ja.png';
import AiImgEn from '../res/research/scain_en.png';
import AgImg from '../res/research/ag.png';
import SiImg from '../res/research/context-situated.png';
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

        <ResearchSection key='isc' id='isc' title={this.props.texts['research_isc_head']}>
          <ResearchSubSection text={this.props.texts['research_isc_exp']}>
            <div className='column has-text-centered'>
              <video src='https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4' controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='scains' id='scains' title={this.props.texts['research_scains_head']}>
          <ResearchSubSection text={this.props.texts['research_scains1_exp']}>
            <div className='column has-text-centered'>
              <video src='https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4'
                controls />
            </div>
          </ResearchSubSection>
          <ResearchSubSection text={this.props.texts['research_scains2_exp']}>
            <div className='column has-text-centered'>
              <video src='https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4' controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='closer' id='closer' title={this.props.texts['research_closer_head']}>
          <ResearchSubSection text={this.props.texts['research_closer_exp']} />
        </ResearchSection>

        <ResearchSection key='relbot' id='relbot' title={this.props.texts['research_relbot_head']}>
          <ResearchSubSection text={this.props.texts['research_relbot_exp']}>
            <div className='column has-text-centered'>
              <video src='https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4' controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='travot' id='travot' title={this.props.texts['research_travot_head']}>
          <ResearchSubSection text={this.props.texts['research_travot_exp']}>
            <div className='column has-text-centered'>
              <video src='https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4' controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='ai' id='ai' title={this.props.texts['research_ai_head']}>
          <ResearchSubSection text={this.props.texts['research_ai_exp']}>
            <div className='column has-text-centered'>
              { this.props.lang === 'ja' &&
                <img src={AiImg} />
              }
              { this.props.lang !== 'ja' &&
                <img src={AiImgEn} />
              }
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='si' id='si' title={this.props.texts['research_si_head']}>
          <ResearchSubSection text={this.props.texts['research_si_exp']}>
            <div className='column has-text-centered'>
              <img src={SiImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='ad' id='ad' title={this.props.texts['research_ad_head']}>
          <ResearchSubSection text={this.props.texts['research_ad_exp']} />
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
          /*
          <ResearchSubSection text={this.props.texts['research_ui_exp2']}>
            <div className='column has-text-centered'>
              <iframe width='560' height='315' src='https://www.youtube.com/embed/4doyLws0zC0?si=39YIJRieC8d1EIAX' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen />
            </div>
          </ResearchSubSection>
          */
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
