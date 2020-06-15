import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect
} from 'react-router-dom';
import { Provider, Container } from 'rebass';

import { GetGeneralTexts } from './texts_general.js';
import { ContentHome } from './content_home.js';
import { ContentResearch, ContentResearchHai, ContentResearchHri,
  ContentResearchCa, ContentResearchAs, ContentResearchCn
} from './content_research.js';
import { ContentMembers } from './content_members.js';
import { ContentPublicationsJournal, ContentPublicationsInternational,
  ContentPublicationsDomestic } from './content_publication.js';
import { ContentActivitiesAward, ContentActivitiesMedia, ContentActivitiesTalk
} from './content_activities';
import { ContentAccess } from './content_access.js';
import { ContentLinks } from './content_links.js';
import { ContentB3 } from './content_b3.js';
import { Content404 } from './content_404.js';

import { HeadNavBar } from './headnav.js';
import { Footer } from './footer.js';

class MainContent extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'
          render={() => <ContentHome texts={this.props.text} />} />
        <Route path='/home'
          render={() => <ContentHome texts={this.props.text} />} />
        <Route path='/research'
          render={() => <ContentResearch texts={this.props.text} />} />
        <Route path='/research_hai'
          render={() => <ContentResearchHai texts={this.props.text} />} />
        <Route path='/research_hri'
          render={() => <ContentResearchHri texts={this.props.text} />} />
        <Route path='/research_ca'
          render={() => <ContentResearchCa texts={this.props.text} />} />
        <Route path='/research_as'
          render={() => <ContentResearchAs texts={this.props.text} />} />
        <Route path='/research_cn'
          render={() => <ContentResearchCn texts={this.props.text} />} />
        <Route path='/member'
          render={() => <ContentMembers texts={this.props.text}
            lang={this.props.lang} />} />
        <Route path='/publication' // Same as journal
          render={() => <ContentPublicationsJournal
            texts={this.props.text} lang={this.props.lang} />} />
        <Route path='/publication_journal'
          render={() => <ContentPublicationsJournal
            texts={this.props.text} lang={this.props.lang} />} />
        <Route path='/publication_international'
          render={() => <ContentPublicationsInternational
            texts={this.props.text} lang={this.props.lang} />} />
        <Route path='/publication_domestic'
          render={() => <ContentPublicationsDomestic
            texts={this.props.text} lang={this.props.lang} />} />
        <Route path='/activity' // same as reward
          render={() => <ContentActivitiesAward
            texts={this.props.text} />} />
        <Route path='/activity_award'
          render={() => <ContentActivitiesAward
            texts={this.props.text} />} />
        <Route path='/activity_media'
          render={() => <ContentActivitiesMedia
            texts={this.props.text} />} />
        <Route path='/activity_talk'
          render={() => <ContentActivitiesTalk
            texts={this.props.text} />} />
        <Route path='/access'
          render={() => <ContentAccess texts={this.props.text} />} />
        <Route path='/links'
          render={() => <ContentLinks texts={this.props.text} />} />
        <Route path='/b3'
          render={() => <ContentB3 texts={this.props.text} />} />
        <Route path='*'
          render={() => <Content404 />} />
      </Switch>
    );
  }
}

function routeInitialUrl() {
  if (window.location.search) {
    // Parse query
    var query = {};
    window.location.search.slice(1).split('&').forEach(function(v) {
      var data = v.split('=');
      query[data[0]] = data[1];
    });
    // Move to queried page
    if (query.p !== undefined) {
      return <Redirect to={query.p} />;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// -----------------------------------------------------------------------------
// ------------------------------ Application Main -----------------------------
// -----------------------------------------------------------------------------
class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      lang: 'en',
      texts: GetGeneralTexts('en'),
      theme: {
        font: 'helvetica, arial, meiryo, "ms pgothic", sans-serif'
      }
    };
  }
  changeLang(lang) {
    this.setState({lang: lang,
      texts: GetGeneralTexts(lang)});
  }
  render() {
    // Page title
    document.title = this.state.texts['title'];
    // All responsive designs are contained here or content_*.js.
    return (
      <Provider theme={this.state.theme}>
        <Container px={[0, 0, 0, 0]} mx={[0, 0, 0, 'auto']} maxWidth='100%'>

          {/* Routing via initial URL */}
          {routeInitialUrl()}

          {/* Menu */}
          <HeadNavBar texts={this.state.texts} changeLang={this.changeLang.bind(this)} langText={this.state.texts.language} />

          {/* Content */}
          <MainContent lang={this.state.lang} text={this.state.texts} />

          {/* Footer */}
          <Footer>
            {this.state.texts['footer']}
          </Footer>

        </Container>
      </Provider>
    );
  }
}

// -----------------------------------------------------------------------------
// -------------------------------- Entry Point --------------------------------
// -----------------------------------------------------------------------------
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('content')
);
