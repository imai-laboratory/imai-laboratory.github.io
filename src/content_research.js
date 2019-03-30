import React from 'react';
import { Box, Heading, Subhead, Image } from 'rebass';

// Images
import LayerImg from '../res/research/top_3layers.jpg';
import HaiMigrationImg from '../res/research/hai_migration.jpg';
import HaiMigrationVid from '../res/research/hai_migration_demo.mp4';
import HriLivenessImg from '../res/research/hri_liveness.jpg';
import HriLivenessVid from '../res/research/hri_liveness_demo.mp4';
import HriImmersionImg from '../res/research/hri_immersion.jpg';
import HriImmersionVid from '../res/research/hri_immersion_demo.mp4';
import HriEmotionImg from '../res/research/hri_emotion.jpg';
import CaWheelchairImg from '../res/research/ca_wheelchair.jpg';
import CaWheelchairVid from '../res/research/ca_wheelchair_demo.mp4';
import AsTeroosImg from '../res/research/as_teroos.jpg';
import AsTeroosVid from '../res/research/as_teroos_demo.mp4';
import AsProtImg from '../res/research/as_prot.jpg';
import AsProtVid from '../res/research/as_prot_demo.mp4';
import CnMouseImg from '../res/research/cn_mouse.jpg';

// -----------------------------------------------------------------------------
// ----------------- Common functions to create research pages -----------------
// -----------------------------------------------------------------------------
function createSpatialText(rawText) {
  var texts = [];
  // Replace newline with Box element
  rawText.split('\n').map(
    (s, i) => { texts.push(<Box width={1} p={1} key={i}>{s}</Box>); }
  );
  return (<Box width={1} pt={1}>{texts}</Box>);
}

function createHead(text) {
  return (<Heading pt={3}>{text}</Heading>);
}

function createSubhead(text) {
  return (<Subhead pt={3}>{text}</Subhead>);
}

const RESP_MEDIA_WIDTH = ['100%', '90%', '75%', '70%'];

function createRespImage(img, caption) {
  return (
    <div>
      <Box mx='auto' width={RESP_MEDIA_WIDTH}>
        <Image src={img} width={1} />
      </Box>
      {caption !== undefined &&
        <Box width={1}><div style={{textAlign: 'center'}}>{caption}</div></Box>
      }
    </div>);
}

function createRespVideo(video, poster, caption) {
  return (
    <div>
      <Box mx='auto' width={RESP_MEDIA_WIDTH}>
        <video src={video} poster={poster} controls style={{width: '100%'}} />
      </Box>
      {caption !== undefined &&
        <Box width={1}><div style={{textAlign: 'center'}}>{caption}</div></Box>
      }
    </div>);
}

// -----------------------------------------------------------------------------
// ------------------------------- Research pages ------------------------------
// -----------------------------------------------------------------------------

// ------------------------------------ Top ------------------------------------
export class ContentResearch extends React.Component {
  render() {
    return (
      <div id="content_research">
        <section id="hero-research" className="hero-img hero is-medium is-dark is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                {this.props.texts['menu_research']}
              </h1>
            </div>
          </div>
        </section>

        <ResearchSection key='iai' id='iai' title={this.props.texts['research_head']}>
          <ResearchSubSection text={this.props.texts['research_exp']}>
            <div className="column has-text-centered">
              <img src={LayerImg} />
              <p>{this.props.texts['research_layer_cap']}</p>
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='hai' id='hai' title={this.props.texts['research_hai_head']}>
          <ResearchSubSection
            title={this.props.texts['research_hai_migration_head']}
            text={this.props.texts['research_hai_migration_exp']}>
            <div className="column has-text-centered">
              <img src={HaiMigrationImg} />
              <video src={HaiMigrationVid} controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='hri' id='hri' title={this.props.texts['research_hri_head']}>
          <ResearchSubSection
            title={this.props.texts['research_hri_liveness_head']}
            text={this.props.texts['research_hri_liveness_exp']}>
            <div className="column has-text-centered">
              <video src={HriLivenessVid} poster={HriLivenessImg} controls />
            </div>
          </ResearchSubSection>
          <ResearchSubSection
            title={this.props.texts['research_hri_immersion_head']}
            text={this.props.texts['research_hri_immersion_exp']}>
            <div className="column has-text-centered">
              <video src={HriImmersionVid} poster={HriImmersionImg} controls />
            </div>
          </ResearchSubSection>
          <ResearchSubSection
            title={this.props.texts['research_hri_emotion_head']}
            text={this.props.texts['research_hri_emotion_exp']}>
            <div className="column has-text-centered">
              <img src={HriEmotionImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='ca' id='ca' title={this.props.texts['research_ca_head']}>
          <ResearchSubSection
            title={this.props.texts['research_ca_wheelchair_head']}
            text={this.props.texts['research_ca_wheelchair_exp']}>
            <div className="column has-text-centered">
              <video src={CaWheelchairVid} poster={CaWheelchairImg} controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='as' id='as' title={this.props.texts['research_as_head']}>
          <ResearchSubSection
            title={this.props.texts['research_as_teroos_head']}
            text={this.props.texts['research_as_teroos_exp']}>
            <div className="column has-text-centered">
              <video src={AsTeroosVid} poster={AsTeroosImg} controls />
            </div>
          </ResearchSubSection>
          <ResearchSubSection
            title={this.props.texts['research_as_prot_head']}
            text={this.props.texts['research_as_prot_exp']}>
            <div className="column has-text-centered">
              <video src={AsProtVid} poster={AsProtImg} controls />
            </div>
          </ResearchSubSection>
        </ResearchSection>

        <ResearchSection key='cn' id='cn' title={this.props.texts['research_cn_head']}>
          <ResearchSubSection
            title={this.props.texts['research_cn_mouse_head']}
            text={this.props.texts['research_cn_mouse_exp']}>
            <div className="column has-text-centered">
              <img src={CnMouseImg} />
            </div>
          </ResearchSubSection>
        </ResearchSection>
      </div>
    )
  }
}

// ------------------------------------ HAI ------------------------------------
export class ContentResearchHai extends React.Component {
  render() {
    return (
      <Box width={1}>
        {/* Head */}
        {createHead(this.props.texts['research_hai_head'])}
        {/* Migration */}
        {createSubhead(this.props.texts['research_hai_migration_head'])}
        {createRespImage(HaiMigrationImg)}
        {createRespVideo(HaiMigrationVid)}
        {createSpatialText(this.props.texts['research_hai_migration_exp'])}
      </Box>
    );
  }
}

// ------------------------------------ HRI ------------------------------------
export class ContentResearchHri extends React.Component {
  render() {
    return (
      <Box width={1}>
        {/* Head */}
        {createHead(this.props.texts['research_hai_head'])}
        {/* Liveness */}
        {createSubhead(this.props.texts['research_hri_liveness_head'])}
        {createRespVideo(HriLivenessVid, HriLivenessImg)}
        {createSpatialText(this.props.texts['research_hri_liveness_exp'])}
        {/* Immersion */}
        {createSubhead(this.props.texts['research_hri_immersion_head'])}
        {createRespVideo(HriImmersionVid, HriImmersionImg)}
        {createSpatialText(this.props.texts['research_hri_immersion_exp'])}
        {/* Emotion */}
        {createSubhead(this.props.texts['research_hri_emotion_head'])}
        {createRespImage(HriEmotionImg)}
        {createSpatialText(this.props.texts['research_hri_emotion_exp'])}
      </Box>
    );
  }
}

// ------------------------------------- CA ------------------------------------
export class ContentResearchCa extends React.Component {
  render() {
    return (
      <Box width={1}>
        {/* Head */}
        {createHead(this.props.texts['research_ca_head'])}
        {/* Wheelchair */}
        {createSubhead(this.props.texts['research_ca_wheelchair_head'])}
        {createRespVideo(CaWheelchairVid, CaWheelchairImg)}
        {createSpatialText(this.props.texts['research_ca_wheelchair_exp'])}
      </Box>
    );
  }
}

// ------------------------------------- AS ------------------------------------
export class ContentResearchAs extends React.Component {
  render() {
    return (
      <Box width={1}>
        {/* Head */}
        {createHead(this.props.texts['research_as_head'])}
        {/* TEROOS */}
        {createSubhead(this.props.texts['research_as_teroos_head'])}
        {createRespVideo(AsTeroosVid, AsTeroosImg)}
        {createSpatialText(this.props.texts['research_as_teroos_exp'])}
        {/* PROT */}
        {createSubhead(this.props.texts['research_as_prot_head'])}
        {createRespVideo(AsProtVid, AsProtImg)}
        {createSpatialText(this.props.texts['research_as_prot_exp'])}
      </Box>
    );
  }
}

// ------------------------------------- CN ------------------------------------
export class ContentResearchCn extends React.Component {
  render() {
    return (
      <Box width={1}>
        {/* Head */}
        {createHead(this.props.texts['research_cn_head'])}
        {/* Mouse (?) */}
        {createSubhead(this.props.texts['research_cn_mouse_head'])}
        {createRespImage(CnMouseImg)}
        {createSpatialText(this.props.texts['research_cn_mouse_exp'])}
      </Box>
    );
  }
}

class ResearchSection extends React.Component {
  render() {
    return(
      <div id={"research_section_" + this.props.id}>
        <section className="hero is-dark">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
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
        <h2 className="research-theme-subtitle">
          {this.props.title}
        </h2>;
    }
    return (
      <div className="container research-theme-content">
        {titlearea}
        <div className="columns">
          {this.props.children}
          <div className="column">{this.props.text}</div>
        </div>
      </div>
    );
  }
}