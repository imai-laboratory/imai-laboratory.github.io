import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link as RouteLink, Redirect
} from 'react-router-dom';
import { Provider, Container, Flex, Box, Image, Link, Label } from 'rebass';

import TitleImg from '../res/title.png';

import { MenuBar, MenuItem, MenuParents, MenuChildren } from './menu.js';
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
import { FixedFooter } from './fixed_footer.js';

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
class TitleImage extends React.Component {
  render() {
    return (
      <RouteLink to={'home'}>
        <Image src={TitleImg} width={1} />
      </RouteLink>
    );
  }
}

class LanguageSwitcher extends React.Component {
  render() {
    return (
      <Flex wrap>
        <Box width={[1 / 3, 1, 1, 1]} align='right'>
          <Label>{this.props.langText}:</Label>
        </Box>
        <Box width={[2 / 3, 1, 1, 1]} align='left'>
          <Flex wrap>
            {/* Texts (`English` and '日本語') are not dynamic. */}
            <Link onClick={this.props.changeLang.bind(this, 'en')}
              href='javascript:;' px={2}>English</Link>
            <Link onClick={this.props.changeLang.bind(this, 'ja')}
              href='javascript:;' px={2}>日本語</Link>
          </Flex>
        </Box>
      </Flex>
    );
  }
}

class MainMenu extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      menuKeys: [
        'home',
        [
          'research', // parent
          'research_hai', // children 1
          'research_hri', // children 2 ...
          'research_ca',
          'research_as',
          'research_cn'
        ],
        'member',
        [
          'publication', // parent
          'publication_journal', // children 1
          'publication_international', // children 2 ...
          'publication_domestic'
        ],
        [
          'activity', // parent
          'activity_award', // children 1
          'activity_media', // children 2
          'activity_talk' // children 3
        ],
        'links',
        'access',
        'b3'
      ]
    };
  }
  createMenuItem(key) {
    return (
      <RouteLink to={key} key={key}>
        <MenuItem>
          {this.props.texts['menu_' + key]}
        </MenuItem>
      </RouteLink>
    );
  }
  createNestedMenuItems(keys) {
    if (keys.length === 0) { return null; }
    var parentItem = this.createMenuItem(keys[0]);
    var childItems = [];
    for (var i = 1; i < keys.length; i++) {
      childItems.push(this.createMenuItem(keys[i]));
    }
    return (<MenuParents key={keys[0] + '_parent'}>
      {parentItem}
      <MenuChildren key={keys[0] + '_child'}>
        {childItems}
      </MenuChildren>
    </MenuParents>);
  };
  render() {
    // Create menu items
    var menuItems = [];
    this.state.menuKeys.forEach((key) => {
      if (typeof (key) === 'string') {
        menuItems.push(this.createMenuItem(key));
      } else if (typeof (key) === 'object') {
        menuItems.push(this.createNestedMenuItems(key));
      } else {
        console.error('Invalid type in menu key.');
      }
    });

    return (<MenuBar>{menuItems}</MenuBar>);
  }
}

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
            texts={this.props.text} />} />
        <Route path='/publication_journal'
          render={() => <ContentPublicationsJournal
            texts={this.props.text} />} />
        <Route path='/publication_international'
          render={() => <ContentPublicationsInternational
            texts={this.props.text} />} />
        <Route path='/publication_domestic'
          render={() => <ContentPublicationsDomestic
            texts={this.props.text} />} />
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
        <Container px={[0, 0, 0, 16]} mx={[0, 0, 0, 'auto']}>

          {/* Routing via initial URL */}
          {routeInitialUrl()}

          {/* Header */}
          <Flex align='center' wrap>
            <Box width={[1, 1 / 2, 1 / 3, 1 / 3]} p={2}>
              <TitleImage />
            </Box>
            <Box ml='auto' align='right' width={[1, 5 / 12, 3 / 12, 3 / 12]} px={4}>
              <LanguageSwitcher changeLang={this.changeLang.bind(this)}
                langText={this.state.texts.language} />
            </Box>
          </Flex>

          {/* Menu */}
          <Flex align='center'>
            <Box width={1} ml={[0, 0, 0, 0]}>
              <MainMenu texts={this.state.texts} />
            </Box>
          </Flex>

          {/* Content */}
          <Flex align='center' py={2}>
            <Box width={1} px={10}>
              <MainContent lang={this.state.lang} text={this.state.texts} />
            </Box>
          </Flex>

          {/* Footer */}
          <Flex align='center' py={20}>
            <Box width={1}>
              <FixedFooter>
                <div style={{textAlign: 'center'}}>
                  {this.state.texts['footer']}
                </div>
              </FixedFooter>
            </Box>
          </Flex>

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
