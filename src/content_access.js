import React from 'react';
import { Flex, Box, Heading, Link } from 'rebass';

const GoogleMap = (<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9341102634576!2d139.6515391506741!3d35.55532944437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f9c5d6e11e5%3A0x2781d6958786ab3a!2z5oW25oeJ576p5aG-5aSn5a2mIOefouS4iuOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1502181984198' frameBorder='0' height='450' style={{border: 0, width: '100%'}} allowFullScreen />);

const URL1 = 'http://www.st.keio.ac.jp/access/';
const URL2 = 'https://www.keio.ac.jp/ja/maps/';

function createSpatialText(rawText) {
  var texts = [];
  // Replace newline with Box element
  rawText.split('\n').map(
    (s, i) => { texts.push(<Box width={1} p={1} key={i}>{s}</Box>); }
  );
  return (<Box width={1} p={3}>{texts}</Box>);
}

// -----------------------------------------------------------------------------
// --------------------------------- Component ---------------------------------
// -----------------------------------------------------------------------------
export class ContentAccess extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
    };
  }
  render() {
    return (
      <Box width={1}>
        {/* Location */}
        <Heading pt={3}>{this.props.texts['access_location_head']}</Heading>
        <Flex align='center' wrap>
          <Box width={[1, 1, 1 / 2, 1 / 2]} px={2}>
            {createSpatialText(this.props.texts['access_location_exp'])}
            {createSpatialText(this.props.texts['access_address'])}
            {createSpatialText(this.props.texts['access_rooms'])}
            {createSpatialText(this.props.texts['access_tel'])}
          </Box>
          <Box width={[1, 1, 1 / 2, 1 / 2]} px={2}>
            {GoogleMap}
          </Box>
        </Flex>

        {/* Access Map */}
        <Heading pt={3}>{this.props.texts['access_accessmap_head']}</Heading>
        <Flex align='center' p={2} wrap>
          <Box width={1} p={1}>
            <Link href={URL1} target='_blank'>
              {this.props.texts['access_accessmap_link1']}
            </Link>
          </Box>
          <Box width={1} p={1}>
            <Link href={URL2} target='_blank'>
              {this.props.texts['access_accessmap_link2']}
            </Link>
          </Box>
        </Flex>

      </Box>
    );
  }
}
