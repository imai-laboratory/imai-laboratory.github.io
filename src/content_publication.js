import React from 'react';
import { Flex, Box, Heading, Subhead, Link } from 'rebass';
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

function createPapterText(paper) {
  var textList = [];
  if (paper.author) {
    textList.push(paper.author.join(', '));
  }
  if (paper.title) {
    textList.push('"' + paper.title + '"');
  }
  if (paper.book) {
    textList.push(paper.book);
  }
  if (paper.vol) {
    textList.push(paper.vol);
  }
  if (paper.no) {
    textList.push(paper.no);
  }
  if (paper.page) {
    textList.push(paper.page);
  }
  if (paper.year) {
    textList.push(paper.year);
  }
  return textList.join(', ').replace(/_/g, ' ');
}
function createPDFLink(paper) {
  if (paper.draft_pdf_url) {
    return <Link href={paper.draft_pdf_url} children={'[PDF]'} />;
  }
}

function createPaperList(papers) {
  // Count up the number of papers
  var paperTotalIdx = 0;
  papers.forEach((paperInfo, yearIdx) => {
    var yearPapers = paperInfo['paper'];
    yearPapers.forEach((paper, paperIdx) => {
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
        <Box width={1} p={2} key={yearIdx + '_' + paperIdx}>
          [{paperTotalIdx--}] {createPapterText(paper)} {createPDFLink(paper)}
        </Box>
      );
    });

    // Register to the total list
    paperList.push(
      <Box width={1} p={3} key={yearIdx}>
        <Subhead>{year}</Subhead>
        {yearPaperList}
      </Box>
    );
  });
  return paperList;
}

function createPublicationElement(head, papers) {
  return (
    <Box width={1}>
      <Heading pt={3}>{head}</Heading>
      <Flex align='center' p={2} wrap>
        <Box width={1} p={1}>
          {createPaperList(papers)}
        </Box>
      </Flex>
    </Box>
  );
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
      this.state.papers);
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
      this.state.papers);
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
      this.state.papers);
  }
}
