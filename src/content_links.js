import React from 'react';
import { Box, Heading, Subhead, Link } from 'rebass';

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentLinks extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
    };
  }
  render() {
    return (
      <div id="content_links">
        <section className="hero is-small is-primary is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">
                {this.props.texts['links_head']}
              </h1>
            </div>
          </div>
        </section>
        <div className="container">
          <ContentLink title="Imai Laboratory - GitHub" url="https://github.com/imai-laboratory"/>
          <ContentLink title="計算理論2017 - お魚天国" url="http://osakana.ailab.ics.keio.ac.jp"/>
          <ContentLink title="『心と脳－認知科学入門』コメント・参考文献" url="http://www.ayu.ics.keio.ac.jp/references/cognitivescience/"/>
          <ContentLink title="Cognitive Robot Interaction 参考文献" url="http://www.ailab.ics.keio.ac.jp/webpage_personal/cognitive_robot_interaction/"/>
        </div>
      </div>
    );
  }
}

class ContentLink extends React.Component {
  render() {
    return (
      <div className="card link-card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
            </div>
          </div>

          <div className="content">
            <p>{this.props.text}</p>
            <a href={this.props.url} className="button is-primary">
              here
            </a>
          </div>
        </div>
      </div>
    );
  }
}