import React from 'react';
import { Box, Heading, Subhead, Link } from 'rebass';

const LINK_DATA = [
  {
    title: 'Imai Laboratory - GitHub',
    url: 'https://github.com/imai-laboratory'
  },
  {
    title: '計算理論2017 - お魚天国',
    url: 'http://osakana.ailab.ics.keio.ac.jp'
  },
  {
    title: '『心と脳－認知科学入門』コメント・参考文献',
    url: 'http://www.ayu.ics.keio.ac.jp/references/cognitivescience/'
  }
];

function createLinkList() {
  // Create current member list
  var linkList = [];
  LINK_DATA.forEach((data, index) => {
    var link = <Link href={data.url} children={data.title} />;
    if (data.option === 'invalid') {
      link = (<strike>{link}</strike>);
    }
    linkList.push(
      <Box width={1} key={index} p={3}>
        <Subhead>{link}</Subhead>
      </Box>);
  });
  return linkList;
}

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
      <Box width={1}>
        <Heading pt={3}>{this.props.texts['links_head']}</Heading>
        {createLinkList()}
      </Box>
    );
  }
}
