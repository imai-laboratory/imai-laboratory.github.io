import React from 'react';
import { Subhead, Link, Text } from 'rebass';
import { fetchJson } from './utility.js';

// Json URLs from publication repository.
const JsonBase =
  'https://raw.githubusercontent.com/imai-laboratory/publications_data/master/';
const JournalJsonExp = JsonBase + 'journal/journal_{yy}.json';
const InternationalJsonExp = JsonBase + 'international/international_{yy}.json';
const DomesticJsonExp = JsonBase + 'domestic/domestic_{yy}.json';
// Years
const JournalYearsJson = JsonBase + 'journal/journal_years.json';
const InternationalYearsJson = JsonBase + 'international/international_years.json';
const DomesticYearsJson = JsonBase + 'domestic/domestic_years.json';

function setPaperStatus(component, yearJsonUrl, jsonUrlExp) {
  // Fetch a json of years
  fetchJson(yearJsonUrl)
    .then((years) => {
      // Set empty array
      component.setState({papers: new Array(years.length)});

      // Fetch paper jsons of the current year
      years.forEach((year, yearIdx) => {
        var url = jsonUrlExp.replace('{yy}', year);
        fetchJson(url)
          .then((paper) => {
            // Set to React's state
            component.state.papers[yearIdx] = {'year': year, 'paper': paper};
            component.forceUpdate();
          });
      });
    });
}

function createPaperText(paper, lang) {
  var textList = [];
  if (paper.author) {
    var authors = getLangText(paper.author, lang);
    textList.push(
      <Text pb={1}>
        <strong>{authors[0].replace(/_/g, ' ')}</strong>
        <span>,</span>
        {authors.slice(1).join(', ').replace(/_/g, ' ')}
      </Text>
    );
  }
  if (paper.title) {
    textList.push(
      <Text pb={1}>
        "<strong>{getLangText(paper.title, lang).replace(/_/g, ' ')}</strong>"
      </Text>
    );
  }
  const place = [];
  if (paper.book) {
    place.push(getLangText(paper.book, lang));
  }
  if (paper.vol) {
    place.push(paper.vol);
  }
  if (paper.no) {
    place.push(paper.no);
  }
  if (paper.page) {
    place.push(paper.page);
  }
  if (paper.year) {
    place.push(paper.year);
  }
  textList.push(
    <Text pb={1}>
      {place.join(',').replace(/_/g, ' ')}
    </Text>
  );
  return textList;
}

function createPDFLink(paper) {
  if (paper.draft_pdf_url) {
    return <Link href={paper.draft_pdf_url} children={'[PDF]'} />;
  }
}

function createAppendixLink(paper) {
  if (paper.appendix_url) {
    return <Link href={paper.appendix_url} children={'[Appendix]'} />;
  }
}

function createPaperList(papers, lang) {
  // Count up the number of papers
  var paperTotalIdx = 0;
  papers.forEach((paperInfo) => {
    var yearPapers = paperInfo['paper'];
    yearPapers.forEach(() => {
      paperTotalIdx++;
    });
  });

  // Create paper list
  var paperList = [];
  papers.forEach((paperInfo, yearIdx) => {
    var year = paperInfo['year'];
    var yearPapers = paperInfo['paper'];

    // Create paper list of a year
    var yearPaperList = [];
    yearPapers.forEach((paper, paperIdx) => {
      yearPaperList.push(
        <tr
          key={yearIdx + '_' + paperIdx}
          style={{'border-bottom': '1px solid #95a5a6'}}>
          <td>{paperTotalIdx--}</td>
          <td style={{padding: '12px'}}>
            {createPaperText(paper, lang)}
            {createPDFLink(paper)}
            {createAppendixLink(paper)}
          </td>
        </tr>
      );
    });

    // Register to the total list
    paperList.push(
      <div key={yearIdx}>
        <Subhead>{year}</Subhead>
        <table style={{'border-collapse': 'collapse', width: '100%'}}>
          <tbody>
            {yearPaperList}
          </tbody>
        </table>
      </div>
    );
  });
  return paperList;
}

function createPublicationElement(head, papers, lang) {
  return (
    <div>
      <section className='hero is-small is-primary is-bold'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <h1 className='title'>
              {head}
            </h1>
          </div>
        </div>
      </section>
      <div className='container'>
        {createPaperList(papers, lang)}
      </div>
    </div>
  );
}

function getLangText(elem, lang) {
  return elem[lang] === undefined ? elem : elem[lang];
}

// --------------------------------- Component ---------------------------------
export class ContentPublicationsJournal extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { papers: [] }; /* paper[yearIdx][paperIdx] */
    // Fetch and set papers
    setPaperStatus(this, JournalYearsJson, JournalJsonExp);
  }
  render() {
    return createPublicationElement(
      this.props.texts['publication_journal_head'],
      this.state.papers,
      this.props.lang);
  }
}

export class ContentPublicationsInternational extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { papers: [] }; /* paper[yearIdx][paperIdx] */
    // Fetch and set papers
    setPaperStatus(this, InternationalYearsJson, InternationalJsonExp);
  }
  render() {
    return createPublicationElement(
      this.props.texts['publication_international_head'],
      this.state.papers,
      this.props.lang);
  }
}

export class ContentPublicationsDomestic extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { papers: [] }; /* paper[yearIdx][paperIdx] */
    // Fetch and set papers
    setPaperStatus(this, DomesticYearsJson, DomesticJsonExp);
  }
  render() {
    return createPublicationElement(
      this.props.texts['publication_domestic_head'],
      this.state.papers,
      this.props.lang);
  }
}
